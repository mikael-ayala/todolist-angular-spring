package todolistspring.services;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import todolistspring.dto.TaskDTO;
import todolistspring.entities.Task;
import todolistspring.repositories.TaskRepository;
import todolistspring.services.exceptions.ResourceNotFoundException;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Transactional(readOnly = true)
    public List<TaskDTO> findAll() {
        List<Task> tasks = taskRepository.findAll();
        return tasks.stream().map(TaskDTO::new).toList();
    }

    @Transactional(readOnly = true)
    public TaskDTO findById(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Resource not found"));
        return new TaskDTO(task);
    }

    @Transactional
    public TaskDTO save(TaskDTO taskDTO) {
        Task task = new Task();
        task.setTitle(taskDTO.title());
        task.setDescription(taskDTO.description());
        task.setCompleted(taskDTO.isCompleted());
        task = taskRepository.save(task);

        return new TaskDTO(task);
    }

    @Transactional
    public TaskDTO updateById(Long id, TaskDTO taskDTO) {
        try {
            Task task = taskRepository.getReferenceById(id);
            task.setTitle(taskDTO.title());
            task.setDescription(taskDTO.description());
            task.setCompleted(taskDTO.isCompleted());
            task = taskRepository.save(task);

            return new TaskDTO(task);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Resource not found");
        }

    }

    @Transactional
    public void deleteById(Long id) {
        if (!taskRepository.existsById(id)) {
            throw new ResourceNotFoundException("Resource not found");
        }
        taskRepository.deleteById(id);
    }
}

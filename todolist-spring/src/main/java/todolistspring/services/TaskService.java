package todolistspring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import todolistspring.dto.TaskDTO;
import todolistspring.entities.Task;
import todolistspring.repositories.TaskRepository;

import java.util.List;

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
        Task task = taskRepository.findById(id).get();
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
        Task task = taskRepository.getReferenceById(id);
        task.setTitle(taskDTO.title());
        task.setDescription(taskDTO.description());
        task.setCompleted(taskDTO.isCompleted());
        task = taskRepository.save(task);

        return new TaskDTO(task);
    }

    @Transactional
    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }
}

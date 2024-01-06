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
}

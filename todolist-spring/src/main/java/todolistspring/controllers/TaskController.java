package todolistspring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import todolistspring.dto.TaskDTO;
import todolistspring.services.TaskService;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<TaskDTO> findAll() {
        return taskService.findAll();
    }

    @GetMapping("/{id}")
    public TaskDTO findById(@PathVariable Long id) {
        return taskService.findById(id);
    }

    @PostMapping
    public TaskDTO save(@RequestBody TaskDTO taskDTO) {
        return taskService.save(taskDTO);
    }

    @PutMapping("/{id}")
    public TaskDTO updateById(@PathVariable Long id, @RequestBody TaskDTO taskDTO) {
        return taskService.updateById(id, taskDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        taskService.deleteById(id);
    }
}

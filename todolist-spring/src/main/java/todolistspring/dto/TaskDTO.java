package todolistspring.dto;

import todolistspring.entities.Task;

public record TaskDTO(Long id, String title, String description, boolean isCompleted) {

    public TaskDTO(Task task) {
        this(task.getId(), task.getTitle(), task.getDescription(), task.isCompleted());
    }
}

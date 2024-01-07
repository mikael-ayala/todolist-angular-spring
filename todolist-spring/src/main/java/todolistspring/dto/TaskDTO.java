package todolistspring.dto;

import jakarta.validation.constraints.NotBlank;
import todolistspring.entities.Task;

public record TaskDTO(
        Long id,
        @NotBlank(message = "Field can't be empty")
        String title,
        @NotBlank(message = "Field can't be empty")
        String description,
        boolean isCompleted
) {
    public TaskDTO(Task task) {
        this(task.getId(), task.getTitle(), task.getDescription(), task.isCompleted());
    }
}

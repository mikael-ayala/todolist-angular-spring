package todolistspring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import todolistspring.entities.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}

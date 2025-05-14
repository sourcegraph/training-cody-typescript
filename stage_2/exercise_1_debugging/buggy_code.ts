// A task management application with several bugs

interface Task {
    id: number;
    title: string;
    completed: boolean;
    dueDate?: Date;
    priority: 'low' | 'medium' | 'high';
}

class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 1;

    // Bug 1: Parameter type error - accepts any instead of proper types
    public addTask(title, priority, dueDate?) {
      const newTask = {
        id: this.nextId++,
        title: title,
        completed: false,
        priority: priority,
        dueDate: dueDate ? new Date(dueDate) : undefined
      };
    
      this.tasks.push(newTask);
      return newTask.id;
    }

    // Bug 2: Logic error in filtering
    public getTasksByPriority(priority: string): Task[] {
      return this.tasks.filter(task => {
        if (priority === 'high') {
          return task.priority === 'high';
        } else if (priority === 'medium') {
          return task.priority === 'low'; // Bug: returns low instead of medium
        } else {
          return task.priority === 'medium'; // Bug: returns medium instead of low
        }
      });
    }

    // Bug 3: Missing null check
    public completeTask(id: number): void {
      const task = this.tasks.find(t => t.id === id);
      task.completed = true; // Will crash if task not found
    }

    // Bug 4: Incorrect date comparison
    public getOverdueTasks(): Task[] {
      const today = new Date();
      return this.tasks.filter(task => {
        // Bug: This doesn't properly check overdue tasks
        return !task.completed && task.dueDate < today;
      });
    }

    public getAllTasks(): Task[] {
      return [...this.tasks]; // Correct implementation
    }
}

// Test code
function runTaskManagerDemo() {
    const manager = new TaskManager();
  
    // Add some tasks
    manager.addTask("Finish report", "high", "2023-11-15");
    manager.addTask("Buy groceries", "medium", "2023-11-20");
    manager.addTask("Call client", "high");
  
    // Bug 5: Accessing non-existent task
    manager.completeTask(4); // Will crash, no task with ID 4
  
    console.log("High priority tasks:", manager.getTasksByPriority("high"));
    console.log("Medium priority tasks:", manager.getTasksByPriority("medium"));
    console.log("Overdue tasks:", manager.getOverdueTasks());
    console.log("All tasks:", manager.getAllTasks());
}

runTaskManagerDemo();

class Queue {
  private tasks: Task[] = [];

  private delay: number = 10;

  public runQueue(): void {
    setTimeout(() => this.doJob(), this.delay);
  }

  public doJob(): void {
    const task = this.tasks.shift();
    if (task !== undefined) {
      // eslint-disable-next-line no-console
      console.log(task.value);
    }
    this.runQueue();
  }

  public addJob(task: Task): number {
    return this.tasks.push(task);
  }

  public run(): void {
    this.runQueue();
  }

  public set jobDelay(time: number) {
    this.delay = time;
  }
}

class Task {
  public value: string | number;

  constructor(value: string | number) {
    this.value = value;
  }
}

const queue = new Queue();

const task1 = new Task('task#1');
const task2 = new Task(1);

queue.jobDelay = 1000;

queue.addJob(task1);
queue.addJob(task2);

queue.run();

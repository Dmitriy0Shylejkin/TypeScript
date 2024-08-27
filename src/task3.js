"use strict";
class Queue {
    constructor() {
        this.tasks = [];
        this.delay = 10;
    }
    runQueue() {
        setTimeout(() => this.doJob(), this.delay);
    }
    doJob() {
        const task = this.tasks.shift();
        if (task !== undefined) {
            // eslint-disable-next-line no-console
            console.log(task.value);
        }
        this.runQueue();
    }
    addJob(task) {
        return this.tasks.push(task);
    }
    run() {
        this.runQueue();
    }
    set jobDelay(time) {
        this.delay = time;
    }
}
class Task {
    constructor(value) {
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

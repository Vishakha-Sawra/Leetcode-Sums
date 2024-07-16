// 621. Task Scheduler

// tasks = ["A","A","A","B","B","B"], n = 2

var leastInterval = function (tasks, n) {
    let map = new Map();
    for (let task of tasks) {
        map.set(task, map.has(task) ? map.get(task) + 1 : 1);
    }
    let max = 0;
    let maxCount = 0;
    for (let [key, value] of map) {
        if (value > max) {
            max = value;
            maxCount = 1;
        } else if (value === max) {
            maxCount++;
        }
    }
    return Math.max((max - 1) * (n + 1) + maxCount, tasks.length);
};

// why max - 1? => because we don't need to consider the last task in the last round of execution. So, we need to subtract 1 from the max frequency task
// why (n + 1)? => because we need to consider the cooling time between the same tasks execution including the task itself as well
// why maxCount? => because we need to consider the tasks which have the same frequency as the max frequency task as well
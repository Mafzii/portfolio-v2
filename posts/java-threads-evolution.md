---
title: "The Evolution of Java Threads"
date: "2025-09-09"
---

Java's threading model has evolved significantly since its inception. In this post, we'll explore the journey from green threads to the modern virtual threads, using code snippets, tables, and various markdown features.
---

## Green Threads

Green threads are threads that are scheduled by a virtual machine (VM) rather than natively by the underlying operating system.

**Example:**
```java
// Pseudocode for green thread scheduling
while (true) {
    for (Thread t : allThreads) {
        if (t.isRunnable()) {
            t.run();
        }
    }
}
```

- Used in early Java versions (up to 1.1 on some platforms)
- Not truly concurrent on multi-core systems

---

## Native Threads

With Java 1.2+, the JVM started using native OS threads.

```java
Thread t = new Thread(() -> System.out.println("Hello from native thread!"));
t.start();
```

- True parallelism on multi-core CPUs
- Heavier resource usage per thread

---

## Executors and Thread Pools

Java 5 introduced the `java.util.concurrent` package, making thread management easier.

```java
import java.util.concurrent.*;

ExecutorService pool = Executors.newFixedThreadPool(4);
pool.submit(() -> System.out.println("Task in pool"));
pool.shutdown();
```

- Simplifies thread reuse
- Prevents resource exhaustion

> **Tip:** Always shut down your thread pools!

---

## Project Loom & Virtual Threads

Java 19+ (preview) introduces virtual threads, enabling millions of lightweight threads.

```java
Thread.startVirtualThread(() -> {
    System.out.println("Hello from a virtual thread!");
});
```

- Extremely lightweight
- Great for high-concurrency applications

---

## Comparison Table

| Feature         | Green Threads | Native Threads | Virtual Threads |
|-----------------|:-------------:|:--------------:|:---------------:|
| Scheduling      | JVM           | OS             | JVM             |
| Concurrency     | Simulated     | True           | True            |
| Resource Usage  | Low           | High           | Very Low        |
| Introduced In   | Java 1.0      | Java 1.2+      | Java 19+        |

---

## Summary

- Java's threading model has evolved from green threads to native threads, and now to virtual threads.
- Each step improved scalability and developer experience.
- Virtual threads (Project Loom) promise to revolutionize concurrent programming in Java.

**Further Reading:**
- [Project Loom (OpenJDK)](https://openjdk.org/projects/loom/)
- [Java Concurrency in Practice](https://jcip.net/)

---

*Happy coding!*

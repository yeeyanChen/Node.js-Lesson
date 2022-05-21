console.log(process.pid);
setTimeout(() => {
  // process.exit(1);
  // process.kill(process.pid, "SIGTERM");
}, 2000);
process.on("SIGTERM", () => {
  console.log("FUCK");
  server.close(() => {
    console.log("Process terminated");
  });
});

const startUsage = process.cpuUsage();
console.log(startUsage);

console.log(process.argv);

const spinnerArray = [ "|", "/", "-", "\\", "|", "/", "-", "\\", "|" ];

for (let i = 0; i < spinnerArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerArray[i]}     `);
    if (i === spinnerArray.length - 1) {
      console.log('\n');
    }
  }, 100 + i * 200);
}
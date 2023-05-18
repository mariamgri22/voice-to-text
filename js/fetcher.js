async function fetchData(message) {
  try {
    const response = await fetch("https://openai-task.onrender.com/openai/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.text();
    console.log(data);
    speakText(data);
  } catch (error) {
    console.error("Error:", error);
  }
}



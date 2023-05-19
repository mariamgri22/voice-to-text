function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

function fetchDataWithLoader(data) {
  showLoader();

  fetchData(data)
    .then(() => {
      hideLoader();
    })
    .catch((error) => {
      hideLoader();
      console.log("Error:", error);
    });
}

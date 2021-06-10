export default function ErrorMessageParser(error) {
  // console.log('extractedErrorMessage');
  //console.log(error);
  var errorMessage = "";
  var extraErrors = "";
  if (error.data) {
    // Request made and server responded

    errorMessage = error.data.message || error.data.exception;

    if (error.data.errors) {
      for (let prop in error.data.errors) {
        for (let i = 0; i < error.data.errors[prop].length; i++) {
          extraErrors += prop + " -  " + error.data.errors[prop][i];
        }
      }
    }
  } else if (error.response) {
    // Request made and server responded

    errorMessage = error.response.data.message || error.response.data.exception;

    if (error.response.data.errors) {
      for (let prop in error.response.data.errors) {
        for (let i = 0; i < error.response.data.errors[prop].length; i++) {
          extraErrors += prop + " -  " + error.response.data.errors[prop][i];
        }
      }
    }
  } else if (error.request) {
    // The request was made but no response was received

    errorMessage = error.request.response;
  }

  if (error.message && errorMessage === "") {
    errorMessage = error.message;
  }

  errorMessage += "\n";
  errorMessage += extraErrors;

  return errorMessage;
}

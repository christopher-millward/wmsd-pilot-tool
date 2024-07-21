function handleResponses(context, id, option) {

  // Add the new key value pair to the dict
  const updatedData=context.allResponses
  updatedData[id]=option
  
  // Update the state with new dict
  context.setAllResponses(updatedData);

  // save state to local
  localStorage.setItem("responses",JSON.stringify(updatedData));
}

export default handleResponses;

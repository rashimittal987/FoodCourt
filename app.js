const request = indexedDB.open('CRM', 1);



request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`);
};
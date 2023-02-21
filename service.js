const sendEmail = (email) => {
       $.ajax({
              method: "POST",
              url: "/",
              dataType: "json",
              email:email,
              success: (data) => {
                console.log(data);
              },
              error: (error) => {
                console.log(error);
              } 
       })
}



function ajax_response(response, success) {
       return function (params) {
              if (success) {
                     params.success(response);
              } else {
                     params.error(response);
              }
       };
}

$.ajax = ajax_response( true , true);


const sendEmail = (email) => {
       $.ajax({
              method: "post",
              url: "'request.php'",
              dataType: "json",
              data: {
                     email
              },
              success: (data) => {
                     console.log(data)
                     return data;      
              },
              error: (error) => {
                     return error;

              }
       })
}




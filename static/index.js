var date = new Date()


//Carregar o DOM HTML


let predicted_emotion;
//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

$(function () {
    $("#predict_button").click(function () {

        let input_data = {
            "text": $("#text").val()
        }
        console.log(input_data)

        $.ajax({
            type: 'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: 'application/json',
            success: function (result) {
                
                // Resultado recebido do Flask ----->JavaScript
                

                
                // Exibir resultado usando JavaScript----->HTML
                

            },
            error: function (result) {
                
            }
        });
    });
})

(function getShoppingList() {
    $.AJAX({
        url: 'https://hidden-sierra-69971-16d83e153d07.herokuapp.com/api/v1.0/shoppinglist',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            tempString = '';
            $.each(data.ingredients, function(index, value) {
                tempString += '<li>Ingredient: ' + index + ' : ' + value.name +  ' quant: '
                            + value.quantity + '</li>';
            })
            $("#list").html(tempString);
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert('Error: ' + xhr.status + '   ' + thrownError);
        }
    })();
});

(function addRecipeToDB() {

    var tokenrecipe = {
        token : localStorage.getItem('usertoken'),
        recipe: {
            name: event.title,
            date: event.date
        }

    };
    console.log(tokenrecipe);
    $.ajax({
        url: 'https://hidden-sierra-69971-16d83e153d07.herokuapp.com/api/v1.0/recipes',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            alert("Success.");
        },
        data: JSON.stringify(tokenrecipe),
        processData: false,
        contentType: "application/json; charset=UTF-8",
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error: ' + xhr.status + '   ' + thrownError);
        }
    });

   
})();

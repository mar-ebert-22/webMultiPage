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

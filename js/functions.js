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
});document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendar.Draggable;
  
    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');
    var checkbox = document.getElementById('drop-remove');
  
    // initialize the external events
    // -----------------------------------------------------------------
  
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText
        };
      }
    });
  
    // initialize the calendar
    // -----------------------------------------------------------------
  
    var calendar = new Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function(info) {
        // is the "remove after drop" checkbox checked?
        if (checkbox.checked) {
          // if so, remove the element from the "Draggable Events" list
          info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
      }
    });
  
    calendar.render();
  });
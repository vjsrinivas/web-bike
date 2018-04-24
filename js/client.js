$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    if(recipient == "@ex1"){
        modal.find('.modal-title').text('PED Walkway')
        modal.find('.modal-body').text('Bike lanes in two directions will be painted on PED Walkway to separate walkers and faster traffic like bikes. This will minimize hazardous interactions with pedestrians and allow both groups to get to their destinations much quicker and safer.')
    }
    else if(recipient == "@ex2"){
        modal.find('.modal-title').text('Bike Racks');
        modal.find('.modal-body').text('Better bike racks will be installed to keep bikes safe during class and overnight. These will be Vol Card activated and free to use for all students.')
    }
    else{
        modal.find('.modal-title').text('Bike Racks');
        modal.find('.modal-body').text('Bike lanes will be painted on roads around campus to leave a designated space for bike riders to travel around campus. The addition of bike lanes on roads around campus will allow bicycle riders to travel around campus safely.')
    }
    modal.find('.modal-body input').val(recipient)
  })

  $(window).on('activate.bs.scrollspy', function () {
    console.log("This event is not firing...");
});

$("#find").click(function (){
    $('html, body').animate({
        scrollTop: $("#problems").offset().top
    }, 1000);
});

// code gets installed at the end of the body (after all other HTML)
(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000, showNextQuote);
    }
    
    showNextQuote();
    
})();

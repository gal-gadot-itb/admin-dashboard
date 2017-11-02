$(function () {
    setTimeout(function () {
        $('.js-basic-example').DataTable({
            responsive: true
        });
        $('.count-to').countTo();
    }, 1000);


    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });


    $('.delete-button').on('click', function () {
            swal({
            title: "Are you sure?",
            text: "You will not be able to recover this user!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function () {
            swal("Deleted!", "The user has been deleted.", "success");
        });
    });

    // $('#gallery').lightGallery({
    //     thumbnail: true,
    //     selector: '.image'
    // });
});
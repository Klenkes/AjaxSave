

;(function($,config){

    $(function(){

        var $message = $("<div class='autosave_dialog autosave_message'></div>").hide();
        var $error = $("<div class='autosave_dialog autosave_error'></div>").hide();

        $("body").append($message);
        $("body").append($error);

        $("#ajax_save, #ajax_save_copy").click(function(event) {
            event.preventDefault();

            if(window.tinyMCE !== undefined){
                tinyMCE.triggerSave();
            }

            //for all those ckeditor users
            $("form.InputfieldForm").find('.InputfieldCKEditor').each(function(){
                $(this).find("textarea").each(function(){
                    var $textarea = $(this);
                    $textarea.val(CKEDITOR.instances["Inputfield_" + $textarea.attr("name")].getData());
                });
            });

            //for all those inline ckeditor users
            $("form.InputfieldForm").find('.InputfieldCKEditorInline').each(function() {
                var $input = $(this).next('input');
                var value = $(this).html();
                $input.attr('value', value);
            });

            // serialize form and append page id
            var $data = $('form#ProcessPageEdit').serialize() + "&id=" + $('#PageIDIndicator').text();

//            console.log($data);

            $.ajax({
                url: config.urls.admin + 'page/ajaxsave-page-edit/ajaxsave/',
                type: 'post',
                data: $data,
                dataType: "json",
                success: function(data){
                    if(!data.error){
                        $message.html(data.message).slideToggle().delay(3000).fadeOut();
                    } else if(data.error){
                        var messages = '';
                        messages += data.message + "<br/>";
                        for(var i in data.errors){
                            messages += data.errors[i] + "<br/>";
                        }
                        $error.html(messages).slideToggle().delay(5000).fadeOut();
                    }
                    //console.log(data);
                }
            });

        });


    });


})(jQuery,config);

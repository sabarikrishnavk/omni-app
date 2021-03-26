//Give formid and it returns the json object 
function readform(formid){
    var form = $(formid); 
    var formdata = form.serializeArray();  
    var jsondata = {};

    $.each(formdata, function() {
        if (jsondata[this.name] !== undefined) {
            if (!jsondata[this.name].push) {
                jsondata[this.name] = [jsondata[this.name]];
            }
            jsondata[this.name].push(this.value || '');
        } else {
            jsondata[this.name] = this.value || '';
        }
    });
    return jsondata;
}
class Ajax {
    constructor(token) {
        this.token = token;
    }
    getAjax(apivegpont, myCallback) {
        const tomb = [];
        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function (result) {
                console.log(result)
                result.forEach((element) => {
                    tomb.push(element);
                });
                myCallback(tomb);
            },
        });
    }
    putAjax(apivegpont, adat, id) {
        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            url: apivegpont + "/" + id,
            type: "PUT",
            data: adat,
            success: function (result) {
                window.location.reload();
            },
        });
    }
    deleteAjax(apivegpont, id) {

        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            url: apivegpont + "/" + id,
            type: "DELETE",
            success: function (result) {
               console.log(result)
               window.location.reload();
            }
        });
    }
    postAjax(apivegpont, adat) {

        adat._token = this.token;
        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            url: apivegpont,
            type: "POST",
            data: adat,
            success: function (result) {
                console.log(result);
                window.location.reload();
            },
        });
    }
}

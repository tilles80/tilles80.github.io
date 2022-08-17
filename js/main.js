
console.log('iniciou 0');

$(function() {

    const token = "IGQVJYMF9McHl4a0JwVjVHZAklLNTEtX3NWRVloRHB1S0JiV0NfNmUzcWlJQW41YklHVkY5a0F5R2o5UmN6dU9pdUtIaHBEblB2SkVqaURiTUlFYkFoODBHMXFGZAFJleFJIcWhsdE51UGNzazZAXY0dCQwZDZD";
    const baseURL = "https://graph.instagram.com/me/media?access_token" + token + "&fields=media_url,media_type,caption,permalink";

    console.log('iniciou');
    $.get(baseURL).then(function(reponse) {

        console.log('recebido', response.data);

    });

})
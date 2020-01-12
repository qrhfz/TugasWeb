$(document).ready(function() {
	// Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $label = $this.parent().find("label");
					
						switch(e.type) {
							case 'keyup': {
								 $label.toggleClass('js-hide-label', $this.val() == '');
							} break;
							case 'blur': {
								if( $this.val() == '' ) {
                    $label.addClass('js-hide-label');
                } else {
                    $label.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
							} break;
							case 'focus': {
								if( $this.val() !== '' ) {
                    $label.removeClass('js-unhighlight-label');
                }
							} break;
							default: break;
						}
					
        });
    } 
});
// Index
$('#btn_shopnow').click(()=>{
    
})





    let total = 0;
    const namaBarang=[];
    

    $('.checked').each(function () {
        $(this).click(()=>{
            getBarang(this.value)
        })
    })

const getBarang = (barang)=>{
    if(barang==1){
        namaBarang.push('Gas')
        total+=8000
    }else if(barang==2){
        namaBarang.push('Kompor')
        total+=10000
    }else if(barang==3){
        namaBarang.push('Paket Komplit')
        total+=80000
    }else if(barang==4){
        namaBarang.push('Paket Minim')
        total+=70000
    }else if(barang==5){
        namaBarang.push('Sarung Tangan')
        total+=5000
    }else if(barang==6){
        namaBarang.push('Senter')
        total+=5000
    }else if(barang==7){
        namaBarang.push('Sepatu')
        total+=15000
    }else if(barang==8){
        namaBarang.push('Sarung Tangan 2')
        total+=10000
    }else if(barang==9){
        namaBarang.push('Tas')
        total+=30000
    }else if(barang==10){
        namaBarang.push('Tenda')
        total+=30000
    }else if(barang==11){
        namaBarang.push('Tiker')
        total+=10000
    }else if(barang==12){
        namaBarang.push('Tongkat')
        total+=10000
    }

}



$('#buatpesanan').click((e)=>{
    e.preventDefault()
    $('#nama').append($('#name').val())
    $('#imail').append($('#email').val())
    $('#alamat').append($('#subject').val())
    $('#barang').append(namaBarang.join('-'))
    $('#harga').append(total)
    $('#catatan').append($('#message').val())

})
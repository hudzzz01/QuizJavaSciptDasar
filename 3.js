/**
 * ============
 * Lucky Number
 * ============
 * 
 * [Instruction]
 * 1. Buat sebuah program yang akan menampilkan deret angka mulai dari 1 hingga angka yang diberikan
 * 
 * 2. Ketika angka itu menyentuh 2 digit, maka hanya menampilkan angka satuannya, angka puluhannya tidak diprint
 *    Contoh:
 *    angka 1-15: 123456789012345
 *    angka 1-21: 123456789012345678901
 * 
 * 3. Jika angka tersebut `habis dibagi 2 DAN habis dibagi 3`, maka angka tersebut diganti menjadi asterisk ('*')
 *    Contoh:
 *    angka 1-12: 12345*78901*345
 *    Penjelasan:
 *    asterisk jatuh pada angka 6 dan 12 karena angka tersebut habis dibagi 2 DAN 3,
 *    maka angka tersebut diganti dengan asterisk.
 */


var size = 20 // 12345*78901*34567*90

var sampah1 = '', sampah2 = '';
let string = "";

for (var i = 1; i<= size; i ++)
{
    
    sampah2 = String(i);

    if ( i > 9 )
    {
        sampah1 += sampah2[1];
    }
    else if ( i <= 9)
    {
        sampah1 += sampah2[0];
    }
    

    
}


for(var i= 0; i <= sampah1.length; i++)
{
    if(sampah1 [i] % 2 === 0 && sampah1 [i] % 3 === 0)
    {
        console.log(sampah1[i]);
        sampah1[i] = '*' ;

    }
}







console.log(sampah1);
"use strict" ;

// Input number and check

let inputText ;
let inputChislo ;
let inputChisloMax = 5000 ;

let messageErr = [] ;
let messageErrResult = "";
let messageErrLength ;

messageErr[0] = "Вы ввели запись не удовлетворяющую списку требований." ;
messageErr[1] = "\nВведите число заново." ;
messageErr[2] = "\nВы НЕ УАКАЗАЛИ ЧИСЛО" ;
messageErr[3] = "\nЭто НЕ ЧИСЛО" ;
messageErr[4] = "\nЧисло НЕ ЦЕЛОЕ" ;
messageErr[5] = "\nЧисло НЕ ПОЛОЖИТЕЛЬНОЕ" ;
messageErr[6] = "\nЧисло РАВНО 0" ;
messageErr[7] = `\nЧисло БОЛЬШЕ ${inputChisloMax}` ;

do  {
    inputText = prompt( `Введите число с заданными критериями :\n1. Целое\n2. Положительное\n3. Больше нуля\n4. Максимальное заначение ${inputChisloMax}` )
    inputChislo = Number( inputText ) ;
    messageErrResult = "" ;

    messageErrResult += messageErr[0] ;

    if ( inputText.length != 0 ) {    

        if ( inputChislo == inputText ) {     
                   
            if ( Number.isInteger(inputChislo) == true ) {

                if ( inputChislo >= 0 ) {

                    if ( inputChislo != 0 ) {

                        if ( inputChislo < inputChisloMax ) {   

                            messageErrResult = "" 

                        } else {
                            messageErrResult += messageErr[7]
                        }
                    } else {
                        messageErrResult += messageErr[6]
                    }
                } else {
                    messageErrResult += messageErr[5]
                }
            } else {
                messageErrResult += messageErr[4]
            }          
        } else {
            messageErrResult += messageErr[3] ;
        }
    } else {
        messageErrResult += messageErr[2] ;
    }

    messageErrResult += messageErr[1] ;

    messageErrLength = messageErr[1].length + messageErr[2].length + 2;

    if ( messageErrResult.length > messageErrLength ) {
        alert(messageErrResult)
    }

} while ( messageErrResult.length > messageErrLength ) ;

// Init code symbol

let alphavitRomeNumber = [] ;

alphavitRomeNumber.push( "I" ) ; // chislo    1
alphavitRomeNumber.push( "V" ) ; // chislo    5
alphavitRomeNumber.push( "X" ) ; // chislo   10
alphavitRomeNumber.push( "L" ) ; // chislo   50
alphavitRomeNumber.push( "C" ) ; // chislo  100
alphavitRomeNumber.push( "D" ) ; // chislo  500
alphavitRomeNumber.push( "M" ) ; // chislo 1000

let chisloRome = ""
let chisloRome_Razryd

let inputText_MassiveSimbols = inputText.split("").reverse()

for (let razryd = 0 ; razryd < inputText.length; razryd++) {

    // i смещение в алфавитете римских цифр
    let i = razryd * 2
    
    switch(inputText_MassiveSimbols[razryd]) {
        case '1':
            chisloRome_Razryd = alphavitRomeNumber[ i ]
            break ;
    
        case '2':
            chisloRome_Razryd = alphavitRomeNumber[ i ] + alphavitRomeNumber[ i ]
            break ;

        case '3':
            chisloRome_Razryd = alphavitRomeNumber[ i ] + alphavitRomeNumber[ i ] + alphavitRomeNumber[ i ]         
            break ;

        case '4':
            if ( razryd < 3 ) {
                chisloRome_Razryd = alphavitRomeNumber[ i ] + alphavitRomeNumber[ i + 1 ]
            } else {
                chisloRome_Razryd = alphavitRomeNumber[ i ] + alphavitRomeNumber[ i ] + alphavitRomeNumber[ i ] + alphavitRomeNumber[ i ]
            }       
            break ;

        case '5':
            chisloRome_Razryd = alphavitRomeNumber[ i + 1 ]
            break ;
            
        case '6':
            chisloRome_Razryd = alphavitRomeNumber[ i + 1 ] + alphavitRomeNumber[ i ]
            break ;
            
        case '7':
            chisloRome_Razryd = alphavitRomeNumber[ i + 1 ] + alphavitRomeNumber[ i ] + alphavitRomeNumber[ i ]
            break ;
            
        case '8':
            chisloRome_Razryd = alphavitRomeNumber[ i + 1 ] + alphavitRomeNumber[ i ] + alphavitRomeNumber[ i ] + alphavitRomeNumber[ i ]
            break ;
            
        case '9':
            chisloRome_Razryd = alphavitRomeNumber[ i ] + alphavitRomeNumber[ i + 2 ]
            break ;
    
        default:
            chisloRome_Razryd = ""
            break ;
    }

    chisloRome = chisloRome_Razryd + chisloRome
}

alert(`Введённое Вами число ${inputText}\nсоответствует ${chisloRome} в римской записи`)

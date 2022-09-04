/** 
 * Size verilen iki adet array’den
 * uygun methodları kullanarak yeni
 * bir object oluşturmanız gerekiyor.
 * Ve bu obje key-value şeklinde 
 * doğru eşleştirme yapılarak
 * oluşturulmalı. 
 */


const input = {
    "cols": ["Name Surname", "Company", "Email", "Date", "Country", "City"],
    "data": [
        ["Hyacinth Vincent", "Duis Corporation", "iaculis.enim@magnaCrasconvallis.ca", "28/06/2022", "Eritrea", "Lyubertsy"],
        ["Brenden Martinez", "Volutpat Nunc Associates", "iaculis@estMauris.org", "24/03/2021", "British Indian Ocean Territory", "Colwood"]]
}

const col=input.cols
const row=input.data
const result={}
const sampleoutput=row.map((input)=>
{
    input.forEach((column, colId)=>
    result[col[colId]]=column
    )
    return result
})
console.log(sampleoutput)

//çıktısı--->
//node odev4.js
[
  {
    'Name Surname': 'Brenden Martinez',
    Company: 'Volutpat Nunc Associates',
    Email: 'iaculis@estMauris.org',
    Date: '24/03/2021',
    Country: 'British Indian Ocean Territory',
  },
  {
    'Name Surname': 'Brenden Martinez',
    Company: 'Volutpat Nunc Associates',
    Email: 'iaculis@estMauris.org',
    Date: '24/03/2021',
    Country: 'British Indian Ocean Territory',
    City: 'Colwood'
  }
]

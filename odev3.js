/**
 * Size verilen javascript dosyasında halihazırda array
 * ve fonksiyon isimleri yer alıyor. Aşağıdaki fonksiyonların
 * içerisine aldığı parametrelere göre comment satırındaki istenileni yapabilecek kod yazmanız bekleniyor.
 */

 const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
  ]


//dosya ve altındaki tüm dosyaları silme
const removeFolder = (folderId) => {
  console.log(folders.filter((folder) => folder.id !== folderId));
  return (console.log(`${folderId} numaralı dosya ve altındaki tüm dosyalar silindi`))
};

//dosya silme
const remove = (id) => {
const folder = folders.find((folder) => {
  return folder.files.find((files) => files.id === id);
    });
      if (!folder) return ("bulunamadı")
      else {
        const fileIndex = folder.files.findIndex((folder2) => folder2.id === id);
        folder.files.splice(fileIndex, 1);
      }console.log(folders);
}
;

//taşıma
const move = (fileId, folderId) => {
  const file=folders.find((f)=>{
    return f.files.find((x)=>x.id===fileId)
  })
  x = remove(fileId)
  const fileMove=file.files.find((f)=>f.id===fileId)
  const folder=folders.find((folder)=>folder.id===folderId)
  folder.files.push(fileMove)
  console.log("dosya ilgili klasöre taşındı, mevcut folders:");
  console.log(folders);
};

//kopyalama
const copy = (fileId, folderId) => {
  folders.map((folder)=>
  {
    if(!folder.files) 
     return (`${fileId} nolu dosya ve ${folderId} nolu klasör bulunamadı`)
    else
    {
      const copiedFile=folder.files.filter(item=>item.id===fileId)
      if (folder.id===folderId)
      folder.files.push(copiedFile)
    }
    console.log(folders)
  })
};

//parent
const parentFolderOf=(id)=>
{
  const folder=folders.find((item)=>
  item.files.find((f) => f.id===Number(id)));
  if(folder) console.log(folder.id) //else finding error
}

//console.log(folders)
//removeFolder(6)
//remove(17) // dosyayı silecek
//move(17,6) // dosyayı klasöre taşıyacak
//copy(15,7) // kopyasını oluşturacak
//parentFolderOf(17)

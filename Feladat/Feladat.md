### A játék leírása:

A játék során a bal oldali, azaz a kiinduló szóból kell eljutni a cél-szóig úgy, hogy közben mindig csak egy-egy karaktert módosítunk.
 ### Részekre bontva a játék:

- Az oldal betöltődésére megjelenik a két szöveges sor és a "Kezdés" gomb.
- A "Kezdés" gombra kattintva:
  - renderelődik a 3 input-elem, amelyből a középső aktív, azaz 3 karakteres szavakat fogad. A fókusz is ezen az elemen van. 
  - Ugyanakkor megjelenik a bal és a jobb input-mezőben egy-egy szó. Ezeket is a model-ben kell tárolni!
  - A "Kezdés" gombról lekerül az eseményfigyelő.
  - A kiinduló és végszó ebből a listából generálódik:
  
```javascript
   const words = ["ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög", "döf", "nép", "kép", "tol", "húz", "bál", "jár", "rák", "láb", "tép", "kút", "búg", "túr", "lép", "súg", "nől", "fől","baj", "vaj", "haj", "raj", "víg", "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt", "fűz", "fúr", "dúl", "dől", "kár", "tőr", "lúd", "lég", "lát", "sál"];
  ```
- A kezdő és a végszó a model-ben, egy-egy változóban tárolódik.
- Amikor a középső input-elemben megadunk egy szót, akkor enter leütésére:
  - a megadott szó, ha nem tartalmaz szóközt és nem is üres sztring, akkor kivesszük az input-mezőből és hozzáadjuk a model-ben az inputValues listához (tömbhöz).
  - Ha a megadott szó szóközt tartalmaz vagy csak egy üres sztringet adtak meg, úgy nem adódik hozzá a tömbhöz, hanem alert-üzenet figyelmezteti a felhasználót, törlődik az input-mező tartalma, és rákerül a fókusz is.
  - Nem kell ellenőrizni, hogy csak egy karakter-e az eltérés a kezdő és a megadott szó között!
  - Ha a megadott szó érvényes (3 karakternyi hosszú), akkor törlődik az input-ból és átíródik a kezdő szó helyére. Az érték átírása úgy történik, hogy előbb beírjuk a model kezdő szavat tároló változójába, majd innen a controller-en keresztül adjuk át a renderelő függvénynek.
  - Ellenőrizni kell, hogy a megadott szó és a végszó azonos-e!
  - Ha a két szó azonos, akkor a középső input-mező inaktív lesz.
  - Ha még nem értük el a végszót, úgy az input tartalma törlődik, fókusz rákerül, a megadott szó beíródik a model inputValues listájába (tömbjébe).
  - A játék addig folytatódik, amíg a végszóhoz el nem jutunk. Ekkor a középső input-mező inaktívvá válik, és a "Kezdés" gomb újra aktív lesz.

Az adatok a model egy-egy változójában tárolódnak.
A model és a view egymással közvetlenül nem kommunikálhatnak, csak a controller-en keresztül.
Az egyes view-beli rutinoknak, ha model-beli értékra van szüksége, akkor azt input-paraméterként a controllerben kapja meg. 
Tehát a view és a model csak a controllerben, a controlleren keresztül érhetik el egymást.
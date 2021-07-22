/*
**  Ghoul 1000-7 script.
**  Subtract 7 from 1000 until you get -1.
**  JS Version used by me in this video: https://www.youtube.com/watch?v=o0xGL3aK-H8
**  Just a meme script, don't take it seriously.
**  Plus, I haven't published anything to this repository for a whole year.
**  PORT TO KOTLIN. (Yes, I started learning Kotlin.)
**  I think, you know how to build Kotlin script. [when I fix my computer, I will make a build especially for you.]
*/

fun main() {
    var i: Int = 1000
    do {
        println("$i-7=${i-7}")
        i -= 7
    } while (i > 0)
}

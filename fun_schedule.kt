/*
** Randomly generates a fun schedule.
** PORT TO KOTLIN
*/

import java.util.Random

val random = Random()

fun main() {
    val maxNumber: Int = rand(3, 10)
    val strings: String = "wake up,go to school,teach kotlin,play cs:go with onetap,become boomer".split(",").toTypedArray()
    var done: String = ""
    for(i in 1..maxNumber){
        done += "$i. ${strings[rand(0, strings.size)]}\n"
    }
    return print(done)  
}

fun rand(from: Int, to: Int) : Int {
    return random.nextInt(to - from) + from
}

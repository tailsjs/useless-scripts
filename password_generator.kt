/*
** PASSWORD GENERATOR
**
** Kinda useless, because in internet you can find other scripts with same use, but it's my repo, it's my rules.
*/

import java.util.Random

val random = Random()

fun main() {
    val letters: String = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789!@#$%^&*_"
    val passLength: Int = 10
    var result: String = ""
    
    for(i in 1..passLength)result += letters[rand(0, letters.length)]
    
    println(result)
}

fun rand(from: Int, to: Int) : Int {
    return random.nextInt(to - from) + from
}

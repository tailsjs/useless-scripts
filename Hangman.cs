namespace Hangman
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = "привет мир";
            string usedLetters = "";
            string tempResult = "";
            int attempts = 6;
            int usedAttempts = 0;
            int attemptResp = -1;
            int gameResp = -1;

            do
            {
                Console.Clear();
                switch (attemptResp)
                {
                    case 0:
                        Console.WriteLine("Ура! Ты угадал правильную букву!");
                    break;
                    case 1:
                        Console.WriteLine("Некорректная буква! + 1 неудачная попытка!");
                    break;
                    case 2:
                        Console.WriteLine("Увы, это была неправильная буква! + 1 неудачная попытка!");
                    break;
                    case 3:
                        Console.WriteLine("Эта буква уже была использована!");
                    break;
                    case 4:
                        Console.WriteLine("Пробелы необязательно ставить.");
                    break;
                }
                Console.WriteLine("Тебе нужно угадать слово.\n\n");
                tempResult = "";
                for (var i = 0; i < word.Length; i++)
                {
                    if (word[i] == ' ')
                    {
                        tempResult += ' ';
                    }else
                    {
                        if (usedLetters.IndexOf(word[i]) > -1)
                        {
                            tempResult += word[i];
                        }
                        else
                        {
                            tempResult += "_";
                        }
                    }
                };
                if (tempResult == word)
                {
                    usedAttempts = attempts;
                    gameResp = 1;
                    break;
                };

                Console.WriteLine($"Буквы: " + tempResult);
                Console.WriteLine($"Использовано {usedAttempts}/{attempts} неудачных попыток.");
                if (usedLetters.Length > 0)
                {
                    Console.WriteLine($"Использованные буквы: {usedLetters}");
                };
                
                string? letter = Console.ReadLine();
                
                if(letter == null || letter.Length != 1)
                {
                    attemptResp = 1;
                    usedAttempts += 1;
                }
                else
                {
                    if(letter == " ")
                    {
                        attemptResp = 4;
                    }
                    else
                    {
                        if (usedLetters.IndexOf(letter) == -1)
                        {
                            attemptResp = 0;
                            usedLetters += letter.ToLower();
                            if (word.IndexOf(letter.ToLower()) == -1)
                            {
                                usedAttempts += 1;
                                attemptResp = 2;
                            }
                        }
                        else
                        {
                            attemptResp = 3;
                        }
                    }
                }
            } while (usedAttempts != attempts);

            Console.Clear();

            switch (gameResp)
            {
                case 1:
                    Console.WriteLine($"Ура! Вы победили! Слово было: {word}");
                break;
                case -1:
                    Console.WriteLine($"Вы проиграли! :( Слово было: {word}");
                break;
            }
        }
    }
}

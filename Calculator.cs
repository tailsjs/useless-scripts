namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("Введи первое число:");
                float Value1 = Convert.ToSingle(Console.ReadLine().Replace(".", ","));


                Console.WriteLine("Теперь введи оператор (+, -, /, *):");
                string Operator = Console.ReadLine();

                Console.WriteLine("Теперь введи второе число:");
                float Value2 = Convert.ToSingle(Console.ReadLine().Replace(".", ","));

                float result = 0;
                switch (Operator)
                {
                    case "+":
                        result = Value1 + Value2;
                        break;
                    case "-":
                        result = Value1 + Value2;
                        break;
                    case "/":
                        result = Value1 / Value2;
                        break;
                    case "*":
                        result = Value1 * Value2;
                        break;
                    default:
                        Console.WriteLine("Такого оператора нет! Выдаём 0...");
                        result = 0;
                        break;
                }

                Console.WriteLine($"Результат: {result}");
            } catch (Exception)
            {
                Console.WriteLine("Ой... Произошла ошибка...");
            }
            Console.ReadLine();
        }
    }
}
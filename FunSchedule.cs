namespace FunSchedule
{
    class Program
    {
        static void Main()
        {
            Random rng = new Random();
            string[] ListOfNeed = "wake up,go to school,teach c#,play cs:go with onetap,become boomer".Split(",");
            string result = "";
            for(var i = 0; i < rng.Next(3, 13); i++)
            {
                result += $"{i + 1}. {ListOfNeed[rng.Next(ListOfNeed.Length)]}\n";
            }
            Console.WriteLine(result);
        }
    }
}
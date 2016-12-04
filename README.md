# math4kids
Math quiz generators for kids

## Что это?
Моя дочь любит решать примеры по математике.
Обычно мы покупаем книжечки с заданиями.
Но, поскольку мне не попалась хорошая книжка с заданиями на дроби,
я решил сделать эти задания сам.

## About
My daughter loves to solve math quizes.
Usually we get books full of small math puzzles.
But I didn't find a good one for fractions, so I did it myself.

## Для разработчиков

1. `applyPies()` - это директива которая рисует дробь в виде кругового графика.
  Числитель - количество закрашеных частей круга,
  знаменатель - на сколько частей надо разделить круг.

  ```
  <div fraction="1/4" class="pie"></div>
  ```
  
  ![1/4](https://rawgit.com/kiselev-dv/math4kids/d468fd5a66bfbda3062accf62574887a18886f7f/examples/1-4.svg)

  Чтобы проверить что ребенок понимает, что не важно какая из, например,
  четвертей круга закрашена, можно добавить смещение, т.е. сколько секторов
  надо пропустить перед тем как начать закрашивать части для числителя.

  Например: закрасить 3 часа, но не с часу до трех, а с четырех до шести.

  ```
  <div fraction="3/12 3" class="pie"></div>
  ```
    
  ![3/12 3](https://rawgit.com/kiselev-dv/math4kids/bf46e32a545bd2ce2d110af02a143bfe1e884dd1/examples/3-12-3.svg)
    
2. `applyTasks()` - Вторая директива генерирует задание по описанию. Так запись

  ```
  <div class="task-def" replace>nameit 1/4</div>
  ```

  будет развернута в задание вида `дробь в виде круга` = `дробь с чертой`
  с клеточками куда надо вписать числитель и знаменатель.

Директивы применяются не автоматически, в конце документа вам надо вызвать их
вручную:

```html
  <script>
    applyTasks()
    applyPies();
  </script>
```

## Dev notes

1. `applyPies()` - main directive. Draws pie-chart for fraction.
  Numerator - number of filled sectors, denominator - number of
  sectors to split the circle.

  ```
  <div fraction="1/4" class="pie"></div>
  ```
  
  ![1/4](https://rawgit.com/kiselev-dv/math4kids/d468fd5a66bfbda3062accf62574887a18886f7f/examples/1-4.svg)
  
  To show, that there is no difference which part of circle is filled,
  you can set the offset. That will made sectors filled staring
  not from first one, but after provided number of blank sectors.

  For instance: fill-out 3 hours, but not from one till three,
  but from four till six.
  
  ```
  <div fraction="3/12 3" class="pie"></div>
  ```
    
  ![3/12 3](https://rawgit.com/kiselev-dv/math4kids/bf46e32a545bd2ce2d110af02a143bfe1e884dd1/examples/3-12-3.svg)

2. `applyTasks()` - Second directive, generates gui for 1 task. This example
  
  ```
  <div class="task-def" replace>nameit 1/4</div>
  ```

  will be expanded into `fraction as pie-chart` = `fraction as numerator over denominator`
  with empty space to fill the numbers.

Directives aren't applies automatically, please call them manually like this:

```html
  <script>
    applyTasks()
    applyPies();
  </script>
```

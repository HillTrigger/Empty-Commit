<script setup>
// const pageTitle = useState('pageTitle', () => 'О нас');
</script>

<template>
  <div class=" pb-12 ">
    <!-- Основной контент -->
    <div class="space-y-8 max-w-xl mx-auto px-4 sm:px-0 mb-12">
      <!-- Заголовок -->
      <h1 class="text-4xl font-bold mb-2 text-center ">Empty Commit</h1>
      <h2 class="text-lg text-center ">Блог, в котором я учусь, ошибаюсь и иногда что-то нажимаю</h2>
      <!-- Вступление -->
      <section class="text-left max-w-md mx-auto">
        <p>Привет, я <span class="font-medium text-indigo-600">HillTrigger</span>, и это <strong>Empty Commit</strong> — мой личный дневник борьбы с Nuxt, Vue и вёрсткой.</p>
      </section>

      <!-- Что здесь будет? -->
      <section>
        <h3 class="text-xl font-semibold mb-3 text-center ">Что здесь будет?</h3>
        <ul class="text-left space-y-2 max-w-md mx-auto list-disc pl-5">
          <li><strong>Мои грабли</strong>: ошибки, на которые я потратил 3 часа, а решение оказалось в одной строчке</li>
          <li><strong>Кривые, но рабочие костыли</strong>, которые почему-то сработали</li>
          <li><strong>Случайные заметки</strong> о том, как заставить <code class="bg-gray-900 px-1 rounded">&lt;div&gt;</code> стоять ровно</li>
          <li><strong>Скриншоты консоли с вопросиками</strong>, потому что «оно работало вчера»</li>
        </ul>
      </section>

      <!-- Почему Empty Commit? -->
      <section class="max-w-md mx-auto">
        <h3 class="text-xl font-semibold mb-3 text-center ">Почему Empty Commit?</h3>
        <p>Ничего филосовского не придумал, просто посты будут так же бессмысленны, как и пустой коммит.</p>
      </section>

      <!-- Чего не будет? -->
      <section>
        <h3 class="text-xl font-semibold mb-3 text-center ">Чего не будет?</h3>
        <ul class="text-left space-y-2 max-w-md mx-auto list-disc pl-5">
          <li>Умных советов (я сам в шоке, когда что-то работает)</li>
          <li>Теории (гуглите доки, я тут за эксперименты)</li>
          <li>Серьёзности (всё на <code class="bg-gray-900 px-1 rounded">!important</code> и <code class="bg-gray-900 px-1 rounded">position: absolute</code>)</li>
          <li>Дизайна (это для меня мрак, к сожалению у этого блога нет макета)</li>
        </ul>
      </section>

      <!-- Техническая сторона -->
      <section class="max-w-md mx-auto">
        <h3 class="text-xl font-semibold mb-3 text-center ">Техническая сторона</h3>
        <p>Блог сделан на <strong>Nuxt 3 + Directus</strong>, потому что:</p>
        <ol class="list-decimal pl-5 space-y-1">
          <li>Мне сказали, что это модно,</li>
          <li>Я пока не разобрался, как это удалить.</li>
        </ol>
      </section>

      <!-- Зачем читать? -->
      <section>
        <h3 class="text-xl font-semibold mb-3 text-center ">Зачем читать?</h3>
        <ul class="text-left space-y-2 max-w-md mx-auto list-disc pl-5">
          <li>Чтобы посмеяться над моим кодом,</li>
          <li>Чтобы понять, что вы не один такой,</li>
          <li>Или просто потыкать в интерфейс (я хз как тут SEO).</li>
        </ul>
        <blockquote class="mt-4 pl-4 border-l-4 border-gray-500 italic text-gray-400 max-w-md mx-auto">«Это не баг, это фича» — моя мантра.</blockquote>
      </section>
    </div>
    <!-- Подпись -->
    <p class=" ">P.S. — <span class="font-medium text-indigo-600">HillTrigger</span>, человек, который <code class="bg-gray-900 px-1 rounded">git push --force</code> и не краснеет.</p>
  </div>
</template>
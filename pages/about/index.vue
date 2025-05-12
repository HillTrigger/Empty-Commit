<script setup>
const config = useRuntimeConfig();

useMetaTags({description: 'Empty Commit - Блог на NuxtJs', image: `${config.public.directusUrl}/assets/88a049d6-3733-4fe2-9323-4da48cb56bc9`, url: 'https://blog.hilltrigger.ru/about'});
</script>

<template>
  <div class="bg-bgSecondary py-12 px-2">
    <h1 class="text-4xl font-bold text-center mb-6 ">Empty Commit</h1>

    <!-- Основной контент -->
    <div class="space-y-8 max-w-xl mx-auto px-2 sm:px-0 mb-12 py-4 bg-bgSecondary200 rounded-lg">
      <!-- Заголовок -->
      <h2 class="text-lg text-center ">Блог, в котором я учусь, ошибаюсь и иногда что-то нажимаю</h2>
      <!-- Вступление -->
      <section class="text-left max-w-md mx-auto">
        <p>Привет, я <NuxtLink
          class="font-medium text-textAccent"
          to="https://github.com/HillTrigger" 
          target="_blank" 
          rel="noopener noreferrer"
          external
        >HillTrigger</NuxtLink>, и это <strong>Empty Commit</strong> — мой личный дневник борьбы с Nuxt, Vue и вёрсткой.</p>
      </section>

      <!-- Что здесь будет? -->
      <section>
        <h3 class="text-xl font-semibold mb-3 text-center ">Что здесь будет?</h3>
        <ul class="text-left space-y-2 max-w-md mx-auto list-disc pl-5">
          <li><strong>Мои грабли</strong>: ошибки, на которые я потратил 3 часа, а решение оказалось в одной строчке</li>
          <li><strong>Кривые, но рабочие костыли</strong>, которые почему-то сработали</li>
          <li><strong>Случайные заметки</strong> о том, как заставить <code class="bg-bgSecondary300 px-1 rounded">&lt;div&gt;</code> стоять ровно</li>
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
          <li>Дизайна (это для меня мрак, к сожалению у этого блога нет макета)</li>
        </ul>
      </section>

      <!-- Техническая сторона -->
      <section>
        <h3 class="text-xl font-semibold mb-3 text-center ">Используемые инструменты</h3>
        <ul class="text-left space-y-2 max-w-md mx-auto list-disc pl-5">
          <li>Vue3</li>
          <li>NuxtJS</li>
          <li>Tailwind</li>
          <li>Directus</li>
        </ul>
      </section>

      <!-- Зачем читать? -->
      <section>
        <h3 class="text-xl font-semibold mb-3 text-center ">Зачем читать?</h3>
        <ul class="text-left space-y-2 max-w-md mx-auto list-disc pl-5">
          <li>Чтобы посмеяться над моим кодом,</li>
          <li>Чтобы понять, что вы не один такой,</li>
          <li>Или просто потыкать в интерфейс (я хз как тут SEO).</li>
        </ul>
        <blockquote class="mt-4 pl-4 border-l-4 border-textQuote italic text-textQuote max-w-md mx-auto">«Это не баг, это фича» — моя мантра.</blockquote>
      </section>
    </div>
  </div>
</template>
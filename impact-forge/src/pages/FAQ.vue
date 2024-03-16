<template>
  <div class="faq">
    <q-page class="flex justify-center">
      <h2>Frequently Asked Questions</h2>
    </q-page>
    <div class="questions">
      <q-expansion-item v-for="(question, index) in faqData" :key="index" :title="question.title">
        <div class="answer" v-html="question.answer"></div>
      </q-expansion-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      faqData: [
        {
          title: 'Can investing in sustainability really make a difference?',
          answer: `Absolutely! Sustainable investments aim not only to generate financial returns but also to create positive environmental and social impacts. By choosing projects that prioritize renewable energy, conservation, and eco-friendly technologies, investors can drive the transition toward a more sustainable and resilient global economy.`,
        },
        {
          title: 'Are sustainable investments only for large investors?',
          answer: `Not at all! We believe in democratizing access to sustainable investments. From small individual contributions to large institutional funding, every investment counts towards building a greener future. We offer a range of investment options to suit different budgets and financial goals.`,
        },
        {
          title: 'How do you ensure the projects you invest in are genuinely sustainable?',
          answer: `We employ a rigorous vetting process, evaluating potential projects based on their environmental, social, and governance (ESG) impacts. This includes thorough due diligence, regular on-site assessments, and continuous monitoring to ensure each project meets our high standards of sustainability and ethical practice.`,
        },
        {
          title: 'Can I visit the projects I invest in?',
          answer: 'Yes, we encourage investors to see the impact of their investments firsthand. We organize visits to project sites, allowing investors to meet the teams on the ground, learn more about the sustainable technologies being used, and witness the positive changes their investments are making.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.faq {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.questions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin-top: 40px;
}

.q-expansion-item {
  width: 45%;
  margin-bottom: 20px;
}

.answer {
  padding: 15px;
}
</style>

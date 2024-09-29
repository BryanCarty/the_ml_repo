import StandardPageHeader from "@/app/_components/StandardPageHeader";
import styles from "@/app/_styles/ArticlePage.module.css";
import Article from "@/app/_components/Article";
import ArticleTitle from "@/app/_components/ArticleTitle";
import HeadingOne from "@/app/_components/HeadingOne";
import FullLengthParagraph from "@/app/_components/FullLengthParagraph";
import HeadingTwo from "@/app/_components/HeadingTwo";
import FullScreenGraphic from "@/app/_components/FullScreenGraphic";
import PromptSection from "@/app/_components/PromptSection";
import PromptRow from "@/app/_components/PromptRow";
import Prompt from "@/app/_components/Prompt";
import SaltAndCinammon from "@/app/_animations/SaltAndCinammon";

export default function HowMachineLearningWorks() {
  return (
    <div>
      <StandardPageHeader />
      <Article>
        <ArticleTitle series="" title="" position="" likes="" comments="" />
        <PromptSection>
          <PromptRow>
            <Prompt text="What is machine learning?" />
            <Prompt text="Why do we need machine learning?" />
            <Prompt text="Supervised learning" />
          </PromptRow>
          <PromptRow>
            <Prompt text="Unupervised learning" />
            <Prompt text="Semi-supervised learning" />
            <Prompt text="Reinforcement learning" />
            <Prompt text="Model-based methods" />
          </PromptRow>
          <PromptRow>
            <Prompt text="Instance based methods" />
            <Prompt text="Online learning" />
            <Prompt text="Offline learning" />
          </PromptRow>
        </PromptSection>
        <HeadingOne text="What is Machine Learning?" />
        <FullLengthParagraph text="At its core Machine learning is about creating and fine-tuning a set of instructions (a function) through a step-by-step improvement process. The goal of this process is to find the best possible set of instructions (a function) to perform a specific task. Whether that be classifying an image (classification), forecasting a stock market move (regression) or detecting fraud (anomaly detection)." />
        <FullLengthParagraph text="Take for example a chef that wants to create the perfect fruit cake recipe. After adding a little bit of cinammon, he decides 'that tastes good, I'm going to add a little bit more next time I bake fruit cake'. On a different day, he could have added a little too much salt and decided 'Ok, next time I only need half that amount of salt'. It's through this iterative process of trial and error, he creates the perfect recipe (a function) to bake the perfect fruit cake (task or objective)." />

        <FullLengthParagraph text="The chef used his refined sense of taste to determine if he was getting closer or further away from the goal. A little more cinammon brought him closer to the goal. A little too much salt pushed him further away from the goal. In machine learning the 'objective function' takes the place of the chefs sense of taste. The objective function quantifies how good our current set of instructions (a function) is, and is used to steer the learning in the correct direction." />
        <SaltAndCinammon />
        <FullLengthParagraph text="You might be wondering 'How does the objective function know what's good or bad. What if the objective function likes salty fruit cake?'. Well, similarily to how the chef built his refined sense of taste through years and years of experience, the objective function requires a lot of data to gauge what is good and bad. In this case, imagine the objective function has access to a big list of ingredients that go well together and ingredients that don't go well together. Every time a new ingredient is added to the recipe, the recipe ingredients are crosschecked against this list to gauge how good or bad the new ingredient combination tastes. This feedback informs the learning process whether we should add similar ingredients in the future or stay away from similar ingredients in the future." />
        <FullLengthParagraph text="This is a very high-level and over simplified example to give a foundational understanding of how many machine learning methods work. We dive much deeper into the workings of models in the articles following this one." />
        <HeadingOne text="Why do we need machine learning?" />
        <FullLengthParagraph text="There are many problems that don't require the use of machine learning to produce an algorithm (or function) to solve them. These types of problems generally have relatively lower complexity and clearly defined rules. Take for example, an algorithm to get the n'th digit in the fibonacci sequence (0, 1, 1, 2, 3, 5, 8, )." />
        <FullLengthParagraph text="There are problems however that do massively benefit from machine learning. For example, what if you were tasked with creating an algorithm to classify images as being that of a dog or a cat. Where would you even begin. You'd need to first determine cat specific features and dog specific features, and then you'd need a way of mapping relative color changes in those images to features. It's not that it's impossible to do. The majority of problems can be solved with traditional methods given sufficient resources (memory, cpu, understanding of the problem/rules etc.), but the complexity involved in manually defining every rule, feature, and variation would be overwhelming and highly impractical." />
        <FullLengthParagraph text="Another example is the Chinese board game Go. In March of 2016, DeepMind's AlphaGo AI bet Lee Sedol, a Go grandmaster in 4 out 5 games. The enormity of this feat is largely due to the fact that the game of Go has 10^172 possible game states while the number of atoms in the observable universe is approximately 10^80. Imagine all the unique rules that would have to be defined if a traditional approach was attempted to solve this problem." />
        <FullLengthParagraph
          text="The trade off for being able to solve more complex problems however is the 
        data requirement. The quality and quantity of data is critical in the efficacy of the
        machine learning method. The database used to train ALphaGo consisted of approximately 30 million moves."
        />
        <HeadingOne text="Supervised Learning vs. Unsupervised Learning" />
        <HeadingTwo text="Supervised Learning" />
        <FullLengthParagraph text="Supervised Learning is a sub-category of machine learning. Supervised learning is used when we have examples of how we want the model to act but can't use a traditional algorithm method. Some of the reasons we might not be able to use a traditional method are due to problem complexity or insufficient resources. With the supervised learning approach we have valid input data and the valid output the model should produce given the input data. The job of the supervised machine learning method is to find a function/algorithm that maps this input data to the valid output data, but to also develop a sufficient understanding of the rules to be able to generalize to new unseen input data so that it can produce valid unseen output data." />
        <FullLengthParagraph text="Supervised machine learning has been applied to classification problems, for example, classifying emails as spam and classifying/interpreting handwritten digits and characters. Supervised machine learning has also been applied to numercial prediction problems (regression), such as predicting house prices given location, size, age etc. Supervised learning has also been applied to sales and temperature forecasting." />
        <FullLengthParagraph
          text="Examples of commonly known supervised learning algrithms that we discuss in the coming articles are:
- Linear Regression
- Logistic Regression
- Decision Trees
- Support Vector Machines
- Neural Networks"
        />

        <HeadingTwo text="Unupervised Learning" />
        <FullLengthParagraph text="Unsupervised Learning is another sub-category of machine learning. Unlike supervised learning however, unsupervised learning models are not trained on labeled data. Unsupervised learning is employed to find patterns, groupings, or relationships in the data without any prior knowledge of what those relationships should look like." />
        <FullLengthParagraph text="Unsupervised learning has been employed for anamoly detection in fraud detection systems to identify outliers or unusual activity. Unsupervised learning has also been employed in Recommendation systems where relationships between different forms of content have been discovered and it can be concluded whether a user would like another type of content given their viewing history." />
        <FullLengthParagraph
          text="Examples of unsupervised learning algorithms that we discuss in the upcoming articles are:
- K-Means Clustering
- Hierarchical Clustering
- Principal Component Analysis (PCA)
- Autoencoders"
        />
        <HeadingTwo text="Semi-Supervised Learning" />
        <FullLengthParagraph text="Semi-supervised learning is a hybrid of supervised learning and unsupervised learning where we have a large amount of unlabeled data and a small amount of labeled data. Semi-supervised learning can be employed in scenarios where it's expensive, time-consuming, or difficult to label the data (e.g. a human may be required to label them), but we have a large amount of unlabeled data ready for use. In semi-supervised learning the model first learns some general features or representations from the unlabeled data, often using clustering, feature extraction, or representation learning techniques. Following this, the labeled data is used to further refine and adjust the model so it can accurately predict labels." />
        <FullLengthParagraph
          text="Semi-supervised learning has been employed in 
- Natural Language Processing (NLP) models
- Computer Vision models
- Medical Imaging models
- Speech Recognition models"
        />
        <HeadingTwo text="Reinforcement Learning" />
        <FullLengthParagraph text="Reinforcement learning is another sub-category of machine learning where an agent learns to make decisions by interacting with an environment/decision space that rewards him on making correct decisions and penalises him on making bad decisions. The goal of the agent is to maximize the reward it can receive. When the agent repeatedly gets the maximum amount of reward it can be concluded it has learned how to optimally interact with that environment. It differs from supervised and unsupervised learning in that the agent is not provided with the correct outputs explicitly. Instead, the agent must explore and experiment to find actions that yield the highest rewards through trial and error." />
        <FullLengthParagraph text="Reinforcement learning is employed in fields such as gaming, autonomous vehicles and the financial markets." />
        <FullLengthParagraph
          text="Commonly used reinforcement learning algorithms are:
- Q-Learning
- Policy Gradient Methods
- Proximal Policy Optimization"
        />
        <HeadingOne text="Instance Based vs. Model Based" />
        <HeadingTwo text="Instance Based" />
        <HeadingTwo text="Model Based" />
        <HeadingOne text="Online vs. Offline" />
        <HeadingTwo text="Online" />
        <HeadingTwo text="Offline" />
        <HeadingOne text="Summary" />
      </Article>
    </div>
  );
}

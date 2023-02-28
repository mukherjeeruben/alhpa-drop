import React from 'react';
import { DiFirebase, DiHeroku, DiAws, DiMongodb, DiGitBranch, DiGithubBadge, DiOnedrive, DiReact, DiIllustrator, DiRedis, DiAngularSimple, DiNodejs, DiDjango, DiNetmagazine, DiDatabase, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tech Skill Set</SectionTitle>
    <SectionText>
      I've worked with a range a production level technologies in the web development world.
      From Back-end, Data Engineering, Analytics To Front-end
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiRedis size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Pipeline</ListTitle>
          <ListParagraph>
            (ETL) <br />
            Kafka, RabbitMQ, Airflow <br />
            Amazon Redshift <br />
            AWS DMS <br />
            AWS S3
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <picture>
            <DiPython size="3rem" />
            </picture>
             Flask - Python  <br />
            <picture>
            <DiDjango size="3rem" />
            </picture>
             Django - Python  <br />
            <picture>
            <DiNetmagazine size="3rem" />
            </picture>
            .NET(MVC) - C# <br />
            <picture>
            <DiDatabase size="3rem" />
            </picture>
             MsSQL, MySQL<br /> 
             <picture>
            <DiDatabase size="3rem" />
            </picture>
             Amazon Dynamo Db, Influxdb <br /> 
            <picture>
            <DiMongodb size="3rem" />
            </picture>
            Mongodb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <picture>
            <DiAngularSimple size="3rem" />
            </picture>
             Angular - Javascript(TypeScript)<br />
            <picture>
            <DiNodejs size="3rem" />
            </picture>
             Nodejs <br />
             <picture>
            <DiPython size="3rem" />
            </picture>
             Dash - Python (Visualization)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiOnedrive size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
          <picture>
          <DiAws size="3rem" />
          </picture>
          AWS <br />
          <picture>
          <DiHeroku size="3rem" />
          </picture>
          Heroku <br />
          Azure <br />
          CICD - Pipline <br />
          <picture>
          <DiGitBranch size="3rem" />
          </picture>
          Gitlab <br />
          <picture>
          <DiGithubBadge size="3rem" />
          </picture>
          Github <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiIllustrator size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI/ Machine Learning</ListTitle>
          <ListParagraph>
          Vector Space Search, Elastic Search <br />
          BERT Model<br />
          Neural Networks (CNN, LSTM, RNN)<br />
          Search Optimization Methods
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

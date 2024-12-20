import {
    HomeAboutSection,
    HomeAboutContainer,
    Content,
    HomeAboutSubtitle,
    HomeAboutTitle,
    HomeAboutText,
    SmallTitle,
    SmallText,
    List,
    Item
} from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"

function HomeAbout() {
    const { data, error } = useSWR("http://localhost:3000/HomeAbout", fetcher)
    if (error) return <div>failed to load</div>
    return (
        <HomeAboutSection>
            <HomeAboutContainer>
                <Content>
                    <HomeAboutSubtitle>
                        {
                            data?.subtitle
                        }
                    </HomeAboutSubtitle>
                    <HomeAboutTitle>
                        {
                            data?.title
                        }
                    </HomeAboutTitle>
                    <HomeAboutText>
                        {
                            data?.text
                        }
                    </HomeAboutText>
                </Content>
                <List>
                    {
                        data?.List?.map((item) => (
                            <Item key={item?.id}>
                                <img src={item?.icon} />
                                <div>
                                    <SmallTitle>
                                        {
                                            item?.title
                                        }
                                    </SmallTitle>
                                    <SmallText>
                                        {
                                            item?.text
                                        }
                                    </SmallText>
                                </div>
                            </Item>
                        ))
                    }
                </List>
            </HomeAboutContainer>
        </HomeAboutSection>
    )
}

export default HomeAbout
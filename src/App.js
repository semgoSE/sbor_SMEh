import React, { Component } from 'react';

import { Panel, Card, Div, View, SimpleCell,Title, Placeholder, PanelHeader, Button, CardGrid, PanelHeaderBack, FormLayout, Input, Textarea, SelectMimicry, File, Radio, Select, FormLayoutGroup, FixedLayout, Epic, Tabbar, TabbarItem, RichCell, Group, ScreenSpinner, Avatar, Separator, List, Header, Snackbar, Subhead, Text, Progress } from '@vkontakte/vkui';
import Snippet from './components/Snippet';
import { Icon28CalendarOutline, Icon28PictureOutline, Icon28TargetOutline, Icon24Dismiss, Icon28AddOutline, Icon28HomeOutline } from '@vkontakte/icons';
import { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';

import './components/Snippet.css'
import '@vkontakte/vkui/dist/vkui.css';

const api = new VKMiniAppAPI();

class App extends Component {
	state = {
		activePanel: 'create',
		activeStory: 'create',
		sbors: [],
		form: {

		}
	}

	componentDidMount() {
		this.setState({ popout: <ScreenSpinner />});
		api.initApp();
		api.getUserInfo().then(userInfo => this.setState({ userInfo, popout: null }))
		console.log(window.location.hash)
		if(window.location.hash == '#1') {
			this.setState({ activeStory: 'sbor'})
		}
	}

	go = (activePanel) => {
		this.setState({ activePanel, form: {}});
	}

	onChange = (e) => {
		this.setState({ form: {...this.state.form, [e.currentTarget.name]: e.currentTarget.value}})
	}

	onChangeFile = (input) => {
		const { form } = this.state;
		if (input.currentTarget.files && input.currentTarget.files[0]) {
			var reader = new FileReader();
			reader.onload = async (e) => {
			await this.setState({ form:{...form, img: e.target.result}})
			};
			reader.readAsDataURL(input.currentTarget.files[0]);
	}
}

	onChangeStory = (e) => {
		this.setState({ activeStory: e.currentTarget.dataset.story})
	}

	submit = (e) => {
		console.log(this.state.form)
		this.setState({ sbors: [...this.state.sbors, {...this.state.form, type: e.currentTarget.dataset.type}], form: {}, activePanel: 'snippet', snackbar: 
			<Snackbar onClose={() => this.setState({ snackbar: null })}>Сбор создан!</Snackbar>
		});
	}

	render() {
		const { form } = this.state;
		return(
		<Epic activeStory={this.state.activeStory} tabbar={
			<Tabbar>
				<TabbarItem selected={this.state.activeStory == 'create'} data-story='create' onClick={this.onChangeStory}><Icon28AddOutline /></TabbarItem>
				<TabbarItem selected={this.state.activeStory == 'home'} data-story='home' onClick={this.onChangeStory}><Icon28HomeOutline /></TabbarItem>
				
			</Tabbar>
		}>

			<View id='sbor' activePanel='home'>
				<Panel id='home'>
					<img src='https://i.ytimg.com/vi/ZwLFyXU-Pso/maxresdefault.jpg' style={{ width: '100%', height: 140, borderRadius: '10px 10px 0px 0px'}} />

						<Title style={{ paddingTop: 12, paddingLeft: 12, paddingRight: 12}} level='2'>Добряши помогают котикам</Title>
						<SimpleCell style={{ paddingTop: 0}} description="Помощь нужна каждый месяц"><span style={{ color: '#6D7885'}}>Автор Матвей Правосудов</span></SimpleCell>
						<Separator />
						<Subhead weight='medium' style={{ paddingTop: 12, paddingLeft: 12, paddingRight: 12 }}>Нужно собрать в сентябре</Subhead>
						<div  style={{ paddingBottom: 12 }}>
							<div className='progress'>
							<p class='value'>6000</p>
							10000
							</div>
						</div>
						<Separator />
							<Div style={{ fontSize: 15 }}>
								<p>Првет добряш</p>
								<p>Много текста(из figma не копируется)</p>
							</Div>
					
						<Separator />
						<div >

						</div>
						<FixedLayout vertical='bottom'>
							<SimpleCell style={{ fontSize: 14}} after={<Div><Button mode='commerce'>Помочь</Button></Div>} description={<Progress  className='progress_my'value={87} ref={ref => ref.style.backgroundColor = 'red'} />}>
							Собрано 8 750 ₽ из 10 000 ₽
							</SimpleCell>
						</FixedLayout>
				</Panel>
			</View>

			<View id='home' activePanel='home' popout={this.state.popout}>
				<Panel id='home'>
					<PanelHeader>Пожертвования</PanelHeader>
					<Div>
						<Card>
							<Div>
	{this.state.userInfo && <SimpleCell description={<span>Вы собрали 100 ₽<br />Вы пожертвовали 0 ₽</span>} before={<Avatar src={this.state.userInfo.photo_200} />}>
									{this.state.userInfo.first_name} {this.state.userInfo.last_name}
								</SimpleCell>}

							</Div>
						</Card>
					</Div>
					<Separator />
					<Group header={<Header>Созданные сборы</Header>}>
						{this.state.sbors.length === 0 ? <Placeholder action={<Button size='l' data-story='create' onClick={this.onChangeStory}>Создать сбор</Button>}>
							У Вас пока нет сборов.<br />
							Начните доброе дело.
						</Placeholder> :
						<List>
							{this.state.sbors.map(sbor => 
								<Snippet type={sbor.type} disabled={true} name={sbor.name} img={sbor.img} />
							)}
						</List>
						}
					</Group>
					<Group header={<Header>Поддерживаемые сборы</Header>}>

					</Group>
				</Panel>
			</View>


			<View id='create' activePanel={this.state.activePanel} popout={this.state.popout}>
				
	
				<Panel id='create'>
					<PanelHeader>Тип сбора</PanelHeader>
	
	
							<CardGrid style={{ marginTop: '30vh'}}>
								<Card size='l'>
									<div>
										<SimpleCell before={<Icon28TargetOutline />} onClick={() => this.go('goal')} description='Когда есть определённая цель' expandable><Title weight='semibold' level='3'>Целевой сбор</Title></SimpleCell>
									</div>
								</Card>
								<Card size='l'>
									<div>
										<SimpleCell before={<Icon28CalendarOutline />} onClick={() => this.go('reqular')} description='Если помощь нужна ежемесячно'  expandable><Title weight='semibold' level='3'>Регулярный сбор</Title></SimpleCell>
									</div>
								</Card>
							</CardGrid>
							{this.state.snackbar}
				</Panel>
			
				<Panel id='goal'>
					<PanelHeader separator={false} left={<PanelHeaderBack onClick={() => this.go('create')}/>}>Целевой сбор</PanelHeader>
					{form.img == null ? <Div style={{ paddingTop: 0}}>
						<File accept="image/x-png,image/jpeg" type='file' mode='tertiary' style={{ border: '1px dashed var(--accent)', padding:'32px 0'}} name='img' onChange={this.onChangeFile} controlSize='xl' before={<Icon28PictureOutline />}>Загрузить обложку</File>
					</Div>: 
					<Div style={{ overflow: 'hidden'}}>
						<img id='image' src={form.img} style={{ width: '100%', height: 140, borderRadius: 10 }} />
					
					</Div>
					}
					<FormLayout>
						<Input top="Название сбора" value={form.name} onChange={this.onChange} name='name' placeholder="Название сбора" />
						<Input top="Сумма, ₽" value={form.summa} onChange={this.onChange} name='summa'  placeholder="Сколько нужно собрать?" />
						<Input top="Цель" onChange={this.onChange} value={form.goal} name='goal' placeholder="Например, лечение человека" />
						<Textarea top="Описание" onChange={this.onChange} value={form.description} name='description' placeholder="На что пойдут деньги и как они кому-то помогут?" />
						<SelectMimicry top='Куда получать деньги'>Счёт VK Pay · 1234</SelectMimicry>
						
						<Button size='xl' disabled={form.name == null || form.summa == null || form.goal == null || form.description == null || form.img == null}  onClick={() => this.setState({ activePanel: 'dop'})}>Далее</Button>
					</FormLayout>
				</Panel>
	
				<Panel id='dop'>
					<PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'goal'})}/>}>Дополнительно</PanelHeader>
					<FormLayout>
						<SelectMimicry top='Автор'>Матвей Правосудов</SelectMimicry>
						<FormLayoutGroup top='Сбор завершится'>
							<Radio checked={form.date == 'end'} name='date' value='end' onChange={this.onChange}>Когда соберём сумму</Radio>
							<Radio checked={form.date == 'date'} name='date' value='date' onChange={this.onChange}>В определённую дату</Radio>
						</FormLayoutGroup>
						{form.date == 'date' && <Select value={form.d} placeholder='Выберите дату' name='d' onChange={this.onChange} top='Дата окончания'>
							<option value='20.09'>20 сентебря</option>
						</Select>}
					</FormLayout>
					<FixedLayout vertical='bottom'>
						<Div>
							<Button size='xl' data-type='goal' onClick={this.submit} disabled={this.state.form.d == null}>Создать сбор</Button>
						</Div>
					</FixedLayout>
				</Panel>
	
				<Panel id='reqular'>
					<PanelHeader separator={false} left={<PanelHeaderBack onClick={() => this.go('create')} />}>Регулярный сбор</PanelHeader>
					{form.img == null ? <Div style={{ paddingTop: 0}}>
						<File accept="image/x-png,image/jpeg" type='file' mode='tertiary' style={{ border: '1px dashed var(--accent)', padding:'32px 0'}} name='img' onChange={this.onChangeFile} controlSize='xl' before={<Icon28PictureOutline />}>Загрузить обложку</File>
					</Div>: 
									<Div style={{ overflow: 'hidden'}}>
									<img id='image' src={form.img} style={{ width: '100%', height: 140, borderRadius: 10 }} />
								
								</Div>
					}
					<FormLayout>
						<Input top="Название сбора" onChange={this.onChange} name='name' placeholder="Название сбора" />
						<Input type='tel' top="Сумма в месяц, ₽" onChange={this.onChange} name='summa'  placeholder="Сколько нужно собрать?" />
						<Input top="Цель" onChange={this.onChange} name='goal' placeholder="Например, лечение человека" />
						<Textarea top="Описание" onChange={this.onChange} name='description' placeholder="На что пойдут деньги и как они кому-то помогут?" />
						<SelectMimicry top='Куда получать деньги'>Счёт VK Pay · 1234</SelectMimicry>
						<SelectMimicry top='Автор'>Матвей Правосудов</SelectMimicry>
						<Button size='xl' data-type='reqular' onClick={this.submit} disabled={form.name == null || form.summa == null || form.goal == null || form.description == null || form.img == null}>{'Создать сбор'}</Button>
					</FormLayout>
				</Panel>
			
				<Panel id='snippet'>
				<PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'create'})} />}>Cниппет</PanelHeader>
					<Div>
						<Snippet 
							disabled={true}
							img={this.state.sbors[this.state.sbors.length-1] && this.state.sbors[this.state.sbors.length-1].img} 
							name={this.state.sbors[this.state.sbors.length-1] && this.state.sbors[this.state.sbors.length-1].name}
							type={this.state.sbors[this.state.sbors.length-1] && this.state.sbors[this.state.sbors.length-1].type}
						/>
					</Div>
					<Div>
						<Button size='xl' onClick={() => api.postToWall('https://vk.com/app7591251#1')}>Поделится на стене</Button>
					</Div>
					{this.state.snackbar}
				</Panel>
			</View>
		</Epic>
		)
	}
}


export default App;


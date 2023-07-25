<script>
import EE from '../tabs/aboutEE.vue'
export default {
    components: {
        EE
    },
    data() {
        return {

            myInfo: ({
                phone: '0965347203',
                email: 'chuengmanfai330@gmail.com',
                address: '臺北市大安區基隆路 4 段 43 號'
            })
        }
    },
    methods: {
        copyNumber() {
            const el = document.createElement('textarea');
            el.value = this.myInfo.phone;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            alert("電話已經複製好了")
            // Optionally, you can show a notification or perform any other action after copying the number
        },
        copyEmail() {
            const el = document.createElement('textarea');
            el.value = this.myInfo.email;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            alert("電郵已經複製好了")
            // Optionally, you can show a notification or perform any other action after copying the number
        }
    }

}
</script>
<template>
    <div class="main">
        <div class="profileBackground" />
        <div class="profile">
            <v-container>
                <v-row no-gutters>

                    <v-col xs="12" md="4">
                        <v-sheet class="pa-2 ma-2">
                            <v-img :width="800" :height="600" aspect-ratio="16/9" cover
                                src="https://picsum.photos/600/500?image=25"></v-img>
                        </v-sheet>
                    </v-col>
                    <v-col cols="1" xs="0">

                    </v-col>
                    <v-col xs="12" md="7">
                        <v-sheet class="pa-2 ma-2">
                            <v-row>
                                <v-col cols="12">
                                    <p> HELLO EVERYBODY, I AM</p>
                                </v-col>
                                <v-col cols="12">


                                    <p class="text-h4 text-center"> <b>張文輝 </b></p>


                                </v-col>
                                <v-col cols="12">


                                    <p class="text-h3 text-center"> <b>Cheung Man Fai </b></p>


                                </v-col>

                                <v-col cols="12">
                                    <v-row>
                                        <v-col cols="12">
                                            <p class="right">
                                                前端工程師、初級全端工程師、後端工程師
                                            </p>
                                        </v-col>

                                        <p class="text-justify">
                                            作為一名剛畢業的大學生，我對這個機會感到非常興奮。儘管我是一個新人，但我擁有強烈的學習動力和熱情，並且相信我具備發展成為一名優秀專業人士的潛力。

                                            我畢業於一所優秀的大學，獲得了臺灣科技大學的學位。在大學期間，我專注於學習相關的核心課程，包括程式設計、演算法以及行動裝置。這些課程不僅豐富了我的專業知識，也培養了我的問題解決能力、團隊合作能力和溝通技巧。

                                            儘管我一些的工作經驗，另外我通過實習和學校項目積累了一些實際的經驗。我曾在一家軟件開發公司進行過工作，參與了一個小型團隊的工作，並負責協助撰寫和維護網站。這段經驗讓我熟悉了軟件開發流程和團隊合作的重要性。

                                            我具有良好的學習能力和適應能力，能夠迅速學習和掌握新技能。我對於工作中出現的新挑戰充滿了好奇心，並且願意接受指導和學習。我相信通過我的努力和積極進取的態度，我能夠快速融入貴公司的文化和團隊，並為貴公司的發展做出貢獻。

                                            我對貴公司的產品和價值觀非常欣賞，並且希望能夠成為貴公司的一員，共同實現目標。我相信我的學術背景、學習能力和熱情使我成為一個有潛力的候選人，並且我非常期待能夠有機會與您進一步討論我能為貴公司帶來的價值。

                                            謝謝您撥冗閱讀我的自我介紹信。如果您需要進一步的資訊，請隨時與我聯繫。我期待著與您進行面試，以展示我的能力和熱情。
                                        </p>
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    <v-list density="compact" nav>
                                        <v-list-item prepend-icon="mdi-phone-outline" :title="myInfo.phone"
                                            @click="copyNumber" value="myfiles" />
                                        <v-list-item prepend-icon="mdi-email" :title="myInfo.email" @click="copyEmail"
                                            value="shared" />
                                        <v-list-item prepend-icon="mdi-map-marker" :title="myInfo.address"
                                            value="starred" />
                                    </v-list>
                                </v-col>


                            </v-row>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>

        </div>
        <div class="skillLayout">
            <v-row>
                <v-col xs="6" md="12">
                    About skill

                </v-col>
                <v-col cols="auto" class="me-auto">

                </v-col>
                <v-col sm="12" md="8" lg="6">

                    java <v-progress-linear color="blue-lighten-3" rounded model-value="80"
                        :height="16"></v-progress-linear>
                    javascript <v-progress-linear color="blue-lighten-3" rounded model-value="70"
                        :height="16"></v-progress-linear>
                    php <v-progress-linear color="blue-lighten-3" rounded model-value="40" :height="16"></v-progress-linear>
                    html <v-progress-linear color="blue-lighten-3" rounded model-value="100"
                        :height="16"></v-progress-linear>
                    python <v-progress-linear color="blue-lighten-3" rounded model-value="30"
                        :height="16"></v-progress-linear>
                </v-col>
            </v-row>
        </div>
        <div class="ee">
            <v-row no-gutters>
                <v-col cols="auto" class="me-auto"></v-col>
                <v-col md="8" offset="1" class="align-center">
                    <EE></EE>
                </v-col>
                <v-col cols="auto" class="me-auto"></v-col>
            </v-row>
        </div>
        <div class="lastdive">
            
        </div>
    </div>
</template>
<style lang="sass" scoped>
.main
    width: 100%
    height: 3000px
    background-color: #EBF2F6
.profileBackground
    width: 100%
    height: 800px
    background-image: linear-gradient(to right,  #B09AF8, #48C2FF)
    background-size: contain, cover
    background-repeat: no-repeat

.profile
    width: auto
    margin: 0rem 10%
    background-color: rgba(255, 255, 255, 1)
    padding: 1rem
    border: 1ps solid black
    border-radius: 10px
    border-style: outset
    position: relative
    box-shadow: 0 2px 12px   rgba(0, 0, 0, 0.2)
    top: -22%
    
.skillLayout
    width: auto
    height: 100px
    position: relative
    top: -20%
    margin-left:20%
    margin-right:20%

.ee 
    top:-10%
    position: relative
</style>
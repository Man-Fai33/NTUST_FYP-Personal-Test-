<template>
    <v-card>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">

            <v-tab :value="1">教育</v-tab>
            <v-tab :value="2">工作經驗</v-tab>
            <v-tab :value="3">實作項目</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item :key="1" :value="1">
                <v-container fluid>
                    <v-timeline align="start">
                        <v-timeline-item v-for="(year, i) in education" :key="i" :dot-color="year.color" size="small">
                            <template v-slot:opposite>
                                <div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
                            </template>
                            <div>
                                <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
                                    {{ year.school }}
                                </h2>
                                <div>
                                    {{ year.context }}
                                </div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-container>
            </v-window-item>
            <v-window-item :key="2" :value="2">
                <v-container fluid>
                    <v-timeline align="start">
                        <v-timeline-item v-for="(item, i) in experience" :key="i" :dot-color="item.color" size="small">
                            <template v-slot:opposite>
                                <div :class="`pt-1 headline font-weight-bold text-${item.color}`" v-text="item.year"></div>
                            </template>
                            <div>
                                <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${item.color}`">
                                    {{ item.company }}
                                </h2>
                                <div>
                                    {{ item.context }}
                                </div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-container>
            </v-window-item>
            <v-window-item v-for="n in 3" :key="n" :value="n">
                <v-container fluid>
                    <v-row>
                        <v-col v-for="(item, i) in Project" :key="i" cols="12" md="4">

                            <v-img :src="`https://picsum.photos/600/500?image=${i * n * 5 + 10}`" :width="400"
                                :height="auto" :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                aspect-ratio="0"></v-img>
                            <div class="text-center">

                                <v-btn style="width: 100%;" @click="showDialog(i)">
                                    {{ item.title }}
                                    <v-dialog v-model="dialogVisible[i]" activator="parent" width="50%">
                                        <v-card>
                                            <v-card-text>

                                                {{ item.context }}
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-btn color="primary" block @click="closeDialog(i)">關閉</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-window-item>
        </v-window>
    </v-card>
</template>
<script>
export default {
    data: () => ({

        tab: null,

        education: [
            {
                color: 'cyan',
                year: '2021/9~2023/6',
                school: '臺灣科技大學-學士學位（資訊管理學系）',
                context: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputandovoluptatibus, vix an salutandi sententiae.'
            },
            {
                color: 'green',
                year: '2019/9~2021/6',
                school: '香港教育學院-副學士文憑（軟件工程）',
                context: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputandovoluptatibus, vix an salutandi sententiae.'

            },
            {
                color: 'pink',
                year: '2018/9~2019/6',
                school: '香港教育學院-基礎文憑（資訊工程）',
                context: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputandovoluptatibus, vix an salutandi sententiae.'

            },
            {
                color: 'amber',
                year: '1990',
                school: '香港教師會李興貴中學',
                context: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputandovoluptatibus, vix an salutandi sententiae.'
            },

        ],
        experience: [
            {
                color: 'green',

                year: '2021/10~2022/10',
                company: 'Jedies Advance Technology Limited',
                context: '在台灣遠端合作完成香港公司委派的項目，目前有涉及的項目技術react-native、react、 node.js(express) '
            },
            {
                color: 'cyan',
                year: '2019/2~2019/7',
                company: '香港專業教育學院',
                context: 'The work is helps school develop a new interface website for new students'
            },
            {
                color: 'amber',
                year: '2018/6~2018/9',
                company: 'PIREN – (Full-time Engineer for summer job)',
                context: 'The job is helps the Hong Kong Housing Authority user change computer and install software'
            },
            {

                year: '1990',
                company: '',
                context: ''
            },

        ],

        dialogVisible: [],
        Project: [
            {
                title: 'Final Year Project(營養平台軟體)',
                photon: '2021/10~2022/10',
                company: 'Jedies Advance Technology Limited',
                context: '提供React-native android端的手機程式給使用者，軟體提供三個角色管理登入手機分別是:使用者,營養師,管理人員.主要功能：基本資料修改，營養餐單分享和操作，社群共享資訊，AI分析食物資訊。重點：AI分析食物資訊是透過使用者對拍攝食物透過AI分析正確的食物名稱再透過抽取所有的食物營養資訊提供React  網站端，提供三個用戶使用網站管理查看資訊。後端使用node.js express資料庫使用MongoDB工作人員四個我主要負責網站建立，輔助手機端和資料庫',
                websiteurl: 'https://drive.google.com/file/d/1CbV7gsJpYnCOMXplRJbX70BajuoWYM96/view'

            },
            {
                title: '網站—夜市介紹管理',
                photon: '2021/10~2022/10',
                company: 'Jedies Advance Technology Limited',
                context: '大學實務專題(獨立完成) 內容：網站提供三個角色管理登入手機分別是:使用者,夜市店鋪老闆,管理人員. 推薦夜市店鋪食物內容，提供英文介紹食物、價錢以及夜市小吃店鋪的所提供食物，在同一個夜市展示所有店舖資訊（包括推薦頂流店鋪和食物），店鋪老闆可以選擇提供店鋪食物列表，管理人員在網站內部管理使用者申請成為店鋪老闆和對網站對意見、公告管理，還有可以添加新的夜市。 提供React  網站端，提供三個用戶使用網站管理查看資訊。 網站畫面 MUI 後端使用node.js express 資料庫使用MongoDB',
                websiteurl: 'https://drive.google.com/file/d/1CbV7gsJpYnCOMXplRJbX70BajuoWYM96/view'
            },
            {
                title: 'BlockChain Learning Platform',
                photon: '2021/10~2022/10',
                company: 'Jedies Advance Technology Limited',
                context: '一個是香港的恆生大學和理工大學委派，企業撰寫一個關於區塊鏈的教學網站。 內容根據提供的excel將資料轉成題目，學生需要根據題目區塊鏈填寫數值，學生之間的分數排名，老師提供題目以及遊戲開始是時間。    成員一共有三個 兩個（我）主要負責前端  ，一個負責後端 用的技術 前端 React ,bootstrap  後端 node.js  資料庫 nginx dbeaver(sql) docker '
            },
            {
                title: 'Read alound',
                photon: '2021/10~2022/10',
                company: 'Jedies Advance Technology Limited',
                context: '使用react native、native base所組成的軟件，內容就是將新聞網站顯示中文還有英文文字閱讀出來然後再根據用戶朗讀錄音給出相對應的分數。 我主要負責debug還重新撰寫新UI介面。 使用的react native、native base 主要負責一個人'
            },
            {
                title: 'QR-PDF',
                photon: '2021/10~2022/10',
                company: 'Jedies Advance Technology Limited',
                context: '內容：後台操作頁面普通用戶名和密碼登錄，接受PDF上傳，輸入有效範圍（Since... 和名稱將PDF轉成SHA256 Hash加載區塊鏈的模塊，並添加一個區塊到裡面列出所有生成的PDF，並註明生成日期，允許用戶重新下載數據庫配置和登錄信息存儲所有以q值作為文件名生成的PDF 工作人員：3個 我主要負責前端 使用react實作網站 使用bootstrap框架  MariaDB 的數據庫服務器'
            },


        ]

    }),
    methods: {
        showDialog(index) {
            // Set the dialog visibility to true for the corresponding project
            this.dialogVisible.splice(index, true);
        },
        closeDialog(index) {
            // Set the dialog visibility to false for the corresponding project
            this.dialogVisible.splice(false);
        },
    },
}
</script>
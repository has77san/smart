import { FaUser, FaUsers } from "react-icons/fa";
import PageFilter from "../../../../layouts/PageFilter";
import PageHeader from "../../../../layouts/PageHeader";
import Master from "../../../../Master";
import Form from "../../../UI/Form";
import Input from "../../../UI/Input";
import Select from "../../../UI/Select";
import "./custme.css";

function CreateCustomReport() {
  return (
    <Master>
      <div className="container-main">
        <br />
        <br />

        <div className="flex justify-between w-[160vh]">
          <div className="brnleft">
            <button className="btn flex ">
              العودة للقائمة{" "}
              <span className="ml-[10px] m-[5px]">
                <svg
                  class="svg-inline--fa fa-arrow-right me-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          <div className="ml-[0px]">
            <div className="flex ml-[20px]">
              <h2 className="ml-[50px] text-[30px] text-black">
                إنشاء تقرير مخصص
              </h2>
              <svg
                className="icone"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="clipboard-list"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"
                ></path>
              </svg>
            </div>
            <div className="">
              <p>إنشاء تقرير جديد مع أسئلة متعددة للفئة المستهدفة</p>
            </div>
          </div>
        </div>







        <div className="my-5 ml-[50px] w-[170vh] flex">





          <div
            dir="rtl"
            class="bg-white shadow-md rounded-2xl border w-[600px] h-[300px] border-gray-200 mb-6"
          >
            <div class="bg-gray-900 text-white px-4 py-3 rounded-t-[8px] flex items-center">
              <i class="fas fa-gears ml-2"></i>
              <h6 class="text-sm font-semibold">الإجراءات</h6>
            </div>

            <div class="p-6 space-y-4">
              <div class="grid gap-3">
                <button
                  type="submit"
                  id="saveReportBtn"
                  disabled
                  class="w-full flex items-center justify-center rounded-lg bg-green-600 text-white py-2.5 text-sm font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i class="fas fa-floppy-disk ml-2"></i>
                  حفظ التقرير
                </button>

                <a
                  href="/list_custom_reports"
                  class="w-full flex items-center justify-center rounded-lg border border-red-500 text-red-600 py-2.5 text-sm font-semibold hover:bg-red-500 transition hover:text-white"
                >
                  <i class="fas fa-xmark ml-2"></i>
                  إلغاء
                </a>
              </div>

              <hr class="border-gray-200" />

              <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <small class="flex items-center text-blue-700 text-sm">
                  <i class="fas fa-circle-info text-blue-500 ml-2"></i>
                  <strong class="mr-1">تذكير:</strong>
                  يجب إضافة سؤال واحد على الأقل لحفظ التقرير  
                </small>
              </div>
            </div>
          </div>



          <div
            dir="rtl"
            class="bg-white shadow-md rounded-[5px] w-[900px] ml-[20px] h-[400px] border border-gray-200 mb-6"
          >
            <div class="bg-[rgba(25,135,84)] text-white px-4 py-3 rounded-t-[8px] flex items-center">
              <i class="fas fa-circle-info ml-2"></i>
              <h6 class="text-sm font-semibold">معلومات التقرير الأساسية</h6>
            </div>

            <div class="p-6 space-y-6">
              <div>
                <label
                  for="title"
                  class="block text-sm font-bold text-gray-800 mb-1"
                >
                  <i class="fas fa-heading text-green-600 ml-1"></i>
                  عنوان التقرير <span class="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  maxlength="200"
                  placeholder="أدخل عنوان التقرير..."
                  class="w-full rounded-lg border-2 border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <p class="text-xs text-gray-500 mt-1">
                  عنوان وصفي للتقرير سيظهر للمستخدمين
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="target_type"
                    class="block text-sm font-bold text-gray-800 mb-1"
                  >
                    <i class="fas fa-users text-green-600 ml-1"></i>
                    الفئة المستهدفة <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="target_type"
                    name="target_type"
                    required
                    class="w-full rounded-lg border-2 border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="" selected>
                      ---------
                    </option>
                    <option value="mandob">المندوبين</option>
                    <option value="captain">السائقين</option>
                    <option value="company">الناقلين</option>
                  </select>
                  <p class="text-xs text-gray-500 mt-1">
                    حدد من سيجيب على هذا التقرير
                  </p>
                </div>

                <div>
                  <label
                    for="mandob"
                    class="block text-sm font-bold text-gray-800 mb-1"
                  >
                    <i class="fas fa-user text-blue-500 ml-1"></i>
                    المندوب
                  </label>
                  <select
                    id="mandob"
                    name="mandob"
                    class="w-full rounded-lg border-2 border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="" selected>
                      جميع المندوبين
                    </option>
                    <option value="2">hsggahmed</option>
                    <option value="4">علي الكرار صفاء</option>
                    <option value="5">حيدر حميد فنجان</option>
                    <option value="7">بغداد/الكرخ</option>
                    <option value="8">وسام حسام</option>
                    <option value="9">علي الكرار امارات</option>
                  </select>
                  <p class="text-xs text-gray-500 mt-1">
                    اترك فارغاً لجميع المندوبين
                  </p>
                </div>
              </div>

              <div>
                <div class="flex items-center">
                  <input
                    id="is_active"
                    name="is_active"
                    type="checkbox"
                    checked
                    class="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label
                    for="is_active"
                    class="mr-2 text-sm font-bold text-gray-800 flex items-center"
                  >
                    <i class="fas fa-toggle-on text-green-600 ml-1"></i> فعال؟
                  </label>
                </div>
                <p class="text-xs text-gray-500">
                  سيكون التقرير متاحاً للمستخدمين
                </p>
              </div>
            </div>
          </div>
        </div>

<div dir="rtl" class="bg-white shadow-md rounded-[5px] ml-[670px] w-[900px] h-[300px] border border-gray-200 mb-6">

  <div class="bg-green-600 text-white px-4 py-3 rounded-t-[5px] flex items-center justify-between">
    <h6 class="flex items-center text-sm font-semibold">
      <i class="fas fa-circle-question ml-2"></i>
      أسئلة التقرير
      <span id="questionCount" class="ml-2 inline-flex items-center justify-center rounded-full bg-white text-gray-800 text-xs font-bold px-2 py-0.5">0</span>
    </h6>
    <button type="button" id="addQuestionBtn"
            class="flex items-center rounded-lg border border-white px-3 py-1.5 text-sm font-medium hover:bg-white hover:text-green-600 transition">
      <i class="fas fa-plus ml-1"></i>
      إضافة سؤال
    </button>
  </div>


  <div class="p-6">
    <div id="questionsContainer">

      <div id="noQuestionsMessage" class="text-center py-10 text-gray-500">
        <i class="fas fa-circle-question fa-3x mb-3 text-gray-400"></i>
        <h5 class="text-lg font-semibold">لا توجد أسئلة بعد</h5>
        <p class="text-sm">انقر على "إضافة سؤال" لبدء إنشاء الأسئلة</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </Master>
  );
}

export default CreateCustomReport;

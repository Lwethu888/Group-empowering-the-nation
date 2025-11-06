// Course Fee Calculator JavaScript

// Get all checkboxes
const checkboxes = document.querySelectorAll(".checkbox-input")
const summaryContent = document.getElementById("summary-content")
const summaryResult = document.getElementById("summary-result")
const courseCount = document.getElementById("course-count")
const totalPrice = document.getElementById("total-price")

// Add event listeners to all checkboxes
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", calculateTotal)
})

function calculateTotal() {
  // Get all checked checkboxes
  const checkedBoxes = document.querySelectorAll(".checkbox-input:checked")
  const count = checkedBoxes.length

  // If no courses selected, show empty state
  if (count === 0) {
    summaryContent.style.display = "block"
    summaryResult.style.display = "none"
    return
  }

  // Calculate total
  let total = 0
  checkedBoxes.forEach((checkbox) => {
    total += Number.parseInt(checkbox.dataset.price)
  })

  // Apply discounts
  let discount = 0
  if (count >= 6) {
    discount = 0.15 // 15% off
  } else if (count >= 4) {
    discount = 0.1 // 10% off
  } else if (count >= 2) {
    discount = 0.05 // 5% off
  }

  const discountedTotal = Math.round(total * (1 - discount))

  // Update display
  courseCount.textContent = count
  totalPrice.textContent = discountedTotal

  // Show result
  summaryContent.style.display = "none"
  summaryResult.style.display = "block"
}

function generateInvoice() {
  const checkedBoxes = document.querySelectorAll(".checkbox-input:checked")
  const count = checkedBoxes.length

  if (count === 0) {
    alert("Please select at least one course to generate an invoice.")
    return
  }

  // Calculate total and discount
  let total = 0
  const selectedCourses = []

  checkedBoxes.forEach((checkbox) => {
    const price = Number.parseInt(checkbox.dataset.price)
    total += price
    const courseName = checkbox.parentElement.querySelector("span").textContent
    selectedCourses.push({ name: courseName, price: price })
  })

  let discount = 0
  let discountText = "No discount"

  if (count >= 6) {
    discount = 0.15
    discountText = "15% discount (6+ courses)"
  } else if (count >= 4) {
    discount = 0.1
    discountText = "10% discount (4-5 courses)"
  } else if (count >= 2) {
    discount = 0.05
    discountText = "5% discount (2-3 courses)"
  }

  const discountAmount = Math.round(total * discount)
  const finalTotal = total - discountAmount

  // Generate invoice HTML
  const invoiceDate = new Date().toLocaleDateString()
  const invoiceNumber = "INV-" + Date.now()

  let invoiceHTML = `
    <div class="invoice-header">
      <img src="public/logo.png" alt="Logo" class="invoice-logo">
      <div>
        <h2>Empowering the Nation</h2>
        <p>Training & Development</p>
      </div>
    </div>
    <div class="invoice-details">
      <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
      <p><strong>Date:</strong> ${invoiceDate}</p>
    </div>
    <table class="invoice-table">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Duration</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
  `

  selectedCourses.forEach((course) => {
    const duration = course.price === 1500 ? "6 months" : "6 weeks"
    invoiceHTML += `
      <tr>
        <td>${course.name}</td>
        <td>${duration}</td>
        <td>R${course.price}</td>
      </tr>
    `
  })

  invoiceHTML += `
      </tbody>
    </table>
    <div class="invoice-summary">
      <div class="invoice-summary-row">
        <span>Subtotal:</span>
        <span>R${total}</span>
      </div>
      <div class="invoice-summary-row">
        <span>Discount (${discountText}):</span>
        <span>-R${discountAmount}</span>
      </div>
      <div class="invoice-summary-row invoice-total">
        <span><strong>Total Amount:</strong></span>
        <span><strong>R${finalTotal}</strong></span>
      </div>
    </div>
    <div class="invoice-footer">
      <p>Thank you for choosing Empowering the Nation!</p>
      <p>Please contact us if you have any questions about this invoice.</p>
    </div>
  `

  document.getElementById("invoice-content").innerHTML = invoiceHTML
  document.getElementById("invoice-modal").style.display = "flex"
}

function closeInvoice() {
  document.getElementById("invoice-modal").style.display = "none"
}

function printInvoice() {
  window.print()
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("invoice-modal")
  if (event.target === modal) {
    closeInvoice()
  }
}
